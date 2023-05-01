//импорт внешних пакетов
import { FC } from "react";

//импорт стилей
import styles from "./CarConditionWImg.module.scss";

//импорт типов
import { IPoint } from "../types/IPoint";
import { ICarConditionFBLR } from "../types/ICarConditionFBLR";

//импорт функционала
import { baseImg } from "../../../../../../../../app/constants/api";

//импорт компонентов


export const CarConditionFBLR: FC<ICarConditionFBLR> = ({ data, activeSlideCategory, setActiveSlideCategory, activeSpans, damagedPlaces }) => {
  const isInclude = (point: IPoint) => {
    let result = false;
    for(let i = 0; i < point.points.length; i++) {
      if(activeSpans.includes(point.points[i].id)) {
        result = true;
      }
    }
    return result;
  };

  return (
    <div className={styles["car-condition-item"]}>
      <div className={styles["car-condition-item__content"]}>
        <img src={data.img} alt={data.position} />
        {
          data.places.map(el => {
            return (
              <span 
                key={el.id} 
                onClick={() => {setActiveSlideCategory(el);}}
                className={`${styles["car-condition-item__span"]} ${styles[`car-condition-item__span-${el.class}`]} ${activeSlideCategory && activeSlideCategory.id === el.id ? styles["car-condition-item__span--active"] : ""} ${isInclude(el) ? styles["car-condition-item__span--clicked"] : ""}`}
              >
              +
              </span>
            );
          })
        }
      </div>
    </div>
  );
};