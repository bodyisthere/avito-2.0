//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "../Tips.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов



interface ITipPrice {
}

export const TipPrice: FC<ITipPrice> = () => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        Курс валют пересчитывается по курсу ЦБ в рабочие дни. Покупатели увидят сумму в рублях.
      </div>
    </div>
  );
};