//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./AdsInputNumber.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов

interface IAdsInputNumber {
  value: number
  setFunction: any
  placeholder: string
  optionKey: string
}

export const AdsInputNumber: FC<IAdsInputNumber> = ( { value, setFunction, placeholder, optionKey } ) => {
  return (
    <input 
      defaultValue={value}
      type="number"
      className={styles.input}
      placeholder={placeholder}
      onChange={e => setFunction(optionKey, e.target.value)} 
    />
  );
};