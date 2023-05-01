//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./Chosen.module.scss";

//импорт типов

//импорт функционала
import { categoryFormat } from "../../utils/categoryFormat";
import { useAppSelector } from "../../../../../app/hooks/redux-hooks";

//импорт компонентов

interface IChosenTitle {

}

export const ChosenTitle: FC<IChosenTitle> = () => {
  const { category } = useAppSelector(state => state.chooseReducer);

  return (
    <div className={styles.title}>
      <p className={styles["title-second"]}>Категория: </p>
      <p className={styles.subtitle}>{ categoryFormat(category) }</p>
    </div>
  );
};