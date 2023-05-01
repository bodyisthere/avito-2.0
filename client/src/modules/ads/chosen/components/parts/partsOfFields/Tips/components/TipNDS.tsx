//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "../Tips.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов



interface ITipNDS {
}

export const TipNDS: FC<ITipNDS> = () => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
      Покупатель сможет получить налоговый вычет, если его деятельность под него попадает
      </div>
    </div>
  );
};