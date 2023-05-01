//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./Chosen.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов
import { ChosenTitle } from "./ChosenTitle";
import { ChosenBack } from "./ChosenBack";
import { useFindAndRenderSelectedCategory } from "../../hooks/useFindAndRenderSelectedCategory";

interface IChosen {

}

export const Chosen: FC<IChosen> = () => {
  const findAndRenderSelectedCategory = useFindAndRenderSelectedCategory();

  return (
    <div className={styles.container}>
      <ChosenBack />
      <ChosenTitle />
      { findAndRenderSelectedCategory() }
    </div>
  );
};