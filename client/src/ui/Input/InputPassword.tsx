//импорт внешних пакетов
import React, { FC, useState, InputHTMLAttributes } from "react";

//импорт стилей
import styles from "./Input.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов

interface IInputPassword extends InputHTMLAttributes<HTMLInputElement>{
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const InputPassword: FC<IInputPassword> = ( { setValue, ...props } ) => {
  const [ isShow, setIsShow ] = useState<boolean>(false);

  return (
    <div className={styles.body}>
      <input 
        type={ isShow ? "text" : "password" }
        className={styles.input} 
        onChange={e => setValue(e.target.value)}
        {...props}
      />
      <button 
        className={styles.clear} 
        onClick={() => setIsShow(!isShow)}
        title="Показать/скрыть пароль"
      >
        {
          isShow
            ?
            <i className="fa-solid fa-eye"></i>
            :
            <i className="fa-solid fa-eye-slash"></i>
        }
      </button>
    </div>
  );
};