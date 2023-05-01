//импорт внешних пакетов
import { FC, useState } from "react";

//импорт стилей
import styles from "./Payment.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов
import { PaymentCard } from "./PaymentCard/PaymentCard";
import { PaymentBoostFirst } from "./PaymentBoost/PaymentBoostFirst";
import { PaymentBoostSecond } from "./PaymentBoost/PaymentBoostSecond";
import { PaymentBoostThird } from "./PaymentBoost/PaymentBoostThird";

interface IPayment {

}

export type TBoosts = Array<"viewBoost" | "colorBoost" | "XLBoost">

export const Payment: FC<IPayment> = () => {
  const [ total, setTotal ] = useState<number>(0);
  const [ boostPackage, setBoostPackage ] = useState<TBoosts>([]);

  console.log("boostPackage: ", boostPackage);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Сделайте объявление эффективнее</p>
      <div className={styles.content}>
        <div className={styles.left}>
          <PaymentBoostFirst setTotal={setTotal} setBoostPackage={setBoostPackage} boostPackage={boostPackage}/>
          <PaymentBoostSecond setTotal={setTotal} setBoostPackage={setBoostPackage} boostPackage={boostPackage}/>
          <PaymentBoostThird setTotal={setTotal} setBoostPackage={setBoostPackage} boostPackage={boostPackage}/>
        </div>
        <div className={styles.right}>
          <PaymentCard total={total} boostPackage={boostPackage}/>
        </div>
      </div>
    </div>
  );
};
