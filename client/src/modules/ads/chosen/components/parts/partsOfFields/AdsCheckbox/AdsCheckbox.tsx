//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./AdsCheckbox.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов

interface IAdsCheckbox {
  setFunction: any
  data: string[]
  style?: {
    [key: string] : string,
  }
}

export const AdsCheckbox: FC<IAdsCheckbox> = ( { setFunction, data, style } ) => {
  return (
    <ul className={styles.list} style={style && style}>
      {
        data.map((item, index) => {
          return (
            <li className={styles.item} key={index}>
              <label className={styles.label}>
                <input
                  type="checkbox" 
                  onChange={() => setFunction(item)}
                />
                <p>{item}</p>
              </label>
            </li>
          );
        })
      }
    </ul>
  );
};