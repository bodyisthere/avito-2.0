//импорт внешних пакетов
import { FC } from "react";

//импорт стилей
import styles from "./PaymentBoost.module.scss";

//импорт типов
import { TBoosts } from "../Payment";

//импорт функционала
import img from "../../../../../app/assets/img/highlight.png";
import { priceForColor } from "../../data/adsBoost.data";

//импорт компонентов
import { OnOff } from "../../../../../ui";

interface IPaymentBoostSecond {
  setTotal: React.Dispatch<React.SetStateAction<number>>
  setBoostPackage: React.Dispatch<React.SetStateAction<TBoosts>>
  boostPackage: TBoosts
}

export const PaymentBoostSecond: FC<IPaymentBoostSecond> = ( { boostPackage, setBoostPackage, setTotal } ) => {

  const isBoostActive = boostPackage.includes("colorBoost");

  const onChange = () => {
    if(isBoostActive) {
      setBoostPackage(prev => prev.filter(el => el !== "colorBoost"));
      setTotal(prev => prev - priceForColor);
    } else {
      setBoostPackage(prev => [...prev, "colorBoost"]);
      setTotal(prev => prev + priceForColor);
    }
  };

  return (
    <div className={`${styles.boost} ${styles.st}`}>
      <div className={styles.left}>
        <img src={img} alt="Выделение объявления" />
        <div className={styles.block}>
          <p>Выделить цену цветом <span>на 7 дней</span></p>
          <p>Привлечёт внимание к цене объявления</p>
        </div>
      </div>
      <div className={styles.right}>
        <p>{ priceForColor } ₽</p>
        <OnOff onChange={onChange}/>
      </div>
    </div>
  );
};
