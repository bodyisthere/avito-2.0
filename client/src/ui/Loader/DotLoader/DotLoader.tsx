//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./DotLoader.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов

interface IDotLoader {

}

export const DotLoader: FC<IDotLoader> = () => {
  return (
    <span className={styles.loader}></span>
  );
};