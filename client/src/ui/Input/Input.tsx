//импорт внешних пакетов
import React, { FC, InputHTMLAttributes } from "react";

//импорт стилей
import styles from "./Input.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  setValue: React.Dispatch<React.SetStateAction<any>>
  type?: "number" | "text"
  clearValue?: boolean
}

export const Input: FC<IInput> = ( { setValue, type = "text", clearValue = true, className, ...props } ) => {
  const classConfigure = () => {
    const rootClasses: string[] = [styles.input];
    return rootClasses;
  };

  const clearValueClick = () => {
    if(type === "number") {
      setValue(0);
    } else {
      setValue("");
    }
  };

  return (
    <div className={styles.body}>
      <input
        type={type}
        className={`${classConfigure().join(" ")} ${className ? className : ""}`}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      <button className={styles.clear} onClick={clearValueClick}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};