//импорт внешних пакетов
import { FC } from "react";

//импорт стилей
import styles from "./PaymentCardComputer.module.scss";

//импорт типов
import { TBoosts } from "../../Payment";

//импорт функционала
import { useAppSelector } from "../../../../../../app/hooks/redux-hooks";
import { baseImg } from "../../../../../../app/constants/api";

//импорт компонентов
import { Button } from "../../../../../../ui";

interface IPaymentCardComputer {
  boostPackage: TBoosts
}

export const PaymentCardComputer: FC<IPaymentCardComputer> = ( { boostPackage } ) => {
  const { form } = useAppSelector(state => state.chooseReducer);

  const isXL = boostPackage.includes("XLBoost");
  const isColor = boostPackage.includes("colorBoost");

  return (
    <div className={styles.computer}>
      <div className={styles.left}>
        <img src={`${baseImg}${form.photo[0]}`} alt="Основное изображение" className={styles["main-img"]}/>
        {
          isXL
          &&
          <div>
            <img 
              src={`${baseImg}${form.photo[0]}`} 
              alt="Дополнительное изображение" 
              className={styles["additional-img"]} 
            />
            <img 
              src={`${baseImg}${form.photo[0]}`} 
              alt="Дополнительное изображение 2" 
              className={styles["additional-img"]}
            />
          </div>
        }
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{form.name}</div>
        <Button size="small" background={isColor ? "lightblue" : "gray"} className={styles.button}></Button>
        {
          isXL
          &&
          <div className={styles.more}>
            <span></span>
            <span></span>
          </div>
        }
        <div className={styles.description}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};