//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./SideBar.module.scss";

//импорт типов

//импорт функционала
import { generateStarRate } from "../utils/generateStarRate";
import { useAppSelector } from "../../../app/hooks/redux-hooks";

//импорт компонентов

interface ISideBarRate {

}

export const SideBarRate: FC<ISideBarRate> = () => {
  const { rate, reviewsList } = useAppSelector(state => state.userReducer.data.reviews.toMe);

  return (
    reviewsList.length
      ?
      <div className={styles.rating}>
        <p className={styles.rate}>
          { rate }
        </p>
        <div className={styles.stars}>
          { generateStarRate(rate, reviewsList) }
        </div>
        <p className={styles.reviews}>
          { reviewsList.length } отзывов
        </p>
      </div>
      :
      <p className={styles.zero}>У вас 0 отзывов</p>
  );
};