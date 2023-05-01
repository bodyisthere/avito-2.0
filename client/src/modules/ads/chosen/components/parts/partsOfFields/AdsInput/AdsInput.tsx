//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./AdsInput.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов

interface IAdsInput {
  after?: string
  type?: string
  value: string | number
  onChange: any
  optionKey: string
}

export const AdsInput: FC<IAdsInput> = ( { after, onChange, value, type = "text" } ) => {
  return (
    <div className={styles["input-ads"]}  >
      <input 
        type={type}
        value={value}
        onChange={onChange}
        style={after ? {"padding": "5px 5px 5px 5px"} : {"padding": "5px"}}
      />
      <span>{ after }</span>
    </div>
  );
};