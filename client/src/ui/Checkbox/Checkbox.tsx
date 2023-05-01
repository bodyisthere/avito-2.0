//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./Checkbox.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов

interface ICheckbox {
  data: string[]
  setDataReady: React.Dispatch<React.SetStateAction<string[]>>
  dataReady: string[]
}

export const Checkbox: FC<ICheckbox> = ( { data, setDataReady, dataReady } ) => {
  const onChange = (item: string) => {
    if(dataReady.includes(item)) {
      const withoutItem = dataReady.filter(el => el !== item);
      setDataReady(withoutItem);
    } else {
      const withItem = [...dataReady, item];
      setDataReady(withItem);
    };
  };

  return (
    <ul className={styles.list}>
      {
        data.map((item, index) => {
          return (
            <li className={styles.item} key={index}>
              <label className={styles.label}>
                <input 
                  type="checkbox" 
                  onChange={() => onChange(item)}
                  checked={dataReady.includes(item) ? true : false} 
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