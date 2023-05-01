//импорт внешних пакетов
import { FC } from "react";

//импорт стилей
import styles from "./PaymentBoost.module.scss";

//импорт типов
import { TBoosts } from "../Payment";

//импорт функционала
import img from "../../../../../app/assets/img/xl.png";
import { priceForXL } from "../../data/adsBoost.data";

//импорт компонентов
import { OnOff } from "../../../../../ui";

interface IPaymentBoostThird {
  setTotal: React.Dispatch<React.SetStateAction<number>>
  setBoostPackage: React.Dispatch<React.SetStateAction<TBoosts>>
  boostPackage: TBoosts
}

export const PaymentBoostThird: FC<IPaymentBoostThird> = ( { boostPackage, setBoostPackage, setTotal } ) => {
  
  const isBoostActive = boostPackage.includes("XLBoost");

  const onChange = () => {
    if(isBoostActive) {
      setBoostPackage(prev => prev.filter(el => el !== "XLBoost"));
      setTotal(prev => prev - priceForXL);
    } else {
      setBoostPackage(prev => [...prev, "XLBoost"]);
      setTotal(prev => prev + priceForXL);
    }
  };

  return (
    <div className={`${styles.boost} ${styles.st}`}>
      <div className={styles.left}>
        <img src={img} alt="Большое объявления" />
        <div className={styles.block}>
          <p>XL-объявление <span>на 7 дней</span></p>
          <p>Большая карточка в результатах поиска</p>
        </div>
      </div>
      <div className={styles.right}>
        <p>34 ₽</p>
        <OnOff onChange={onChange}/>
      </div>
    </div>
  );
};
