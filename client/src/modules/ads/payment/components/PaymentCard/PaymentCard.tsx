//импорт внешних пакетов
import { FC, useState } from "react";

//импорт стилей
import styles from "./PaymentCard.module.scss";

//импорт типов
import { TBoosts } from "../Payment";

//импорт функционала

//импорт компонентов
import { PaymentCardComputer } from "./CardComputer/PaymentCardComputer";
import { PaymentCardMobile } from "./CardMobile/PaymentCardMobile";

interface IPaymentCard {
  total: number
  boostPackage: TBoosts
}

export const PaymentCard: FC<IPaymentCard> = ( { total, boostPackage } ) => {
  const [ view, setView ] = useState<"computer" | "mobile">("computer");

  const setComputer = () => setView("computer");
  const setMobile = () => setView("mobile");

  return (
    <div className={styles.card}>
      <p className={styles.title}>{ boostPackage.length ? "Ваш выбор" : "Услуги не выбраны"}</p>
      <div className={styles.content}>
        <div className={styles.left}>
          { view === "computer" && <PaymentCardComputer boostPackage={boostPackage} />}
          { view === "mobile" && <PaymentCardMobile />}
        </div>
        <div className={styles.right}>
          <button onClick={setComputer} className={`${styles.button} ${view === "computer" ? styles["button--active"] : ""}`}>
            <i className="fa-solid fa-computer"></i>
          </button>
          <button onClick={setMobile} className={`${styles.button} ${view === "mobile" ? styles["button--active"] : ""}`}>
            <i className="fa-solid fa-mobile-screen-button"></i>
          </button>
        </div>
      </div>
      {
        boostPackage.length
          ?
          <div className={styles.total}>
            <p>Итого за { boostPackage.length } услуги</p>
            <p>{total} ₽</p>
          </div>
          :
          ""
      }
    </div>
  );
};
