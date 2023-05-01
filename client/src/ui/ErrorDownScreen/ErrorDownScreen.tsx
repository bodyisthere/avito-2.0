//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./ErrorDownScreen.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов

interface IErrorDownScreen {
  message: string
}

export const ErrorDownScreen: FC<IErrorDownScreen> = ( { message } ) => {
  return (
    <div className={styles.body}>
      <p className={styles.text}>
        {message}
      </p>
    </div>
  );
};