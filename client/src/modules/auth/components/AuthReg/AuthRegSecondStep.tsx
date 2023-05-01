//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "../Auth.module.scss";

//импорт типов
import { TCondition } from "../../types/TCondition";

//импорт функционала

//импорт компонентов

interface IAuthRegSecondStep {
  setCondition: React.Dispatch<React.SetStateAction<TCondition>>
}

export const AuthRegSecondStep: FC<IAuthRegSecondStep> = ( { setCondition } ) => {
  return (
    <>
      <p className={styles.title}>
        Регистрация
      </p>
      <p className={styles.subtitle}>
      На вашу почту была отправлена ссылка с активацией вашего аккаунта😎
      </p>
      <span></span>
    </>
  );
};