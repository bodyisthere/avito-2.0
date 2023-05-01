//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./Chosen.module.scss";

//импорт типов

//импорт функционала
import { useActions } from "../../../../../app/hooks/redux-hooks";

//импорт компонентов

interface IChosenPop {
  setIsPopOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ChosenPop: FC<IChosenPop> = ( { setIsPopOpen } ) => {
  const { setCategoryChoose, setChooseStep } = useActions();

  const submit = () => {
    setChooseStep("choose");
    setCategoryChoose([]);
  };

  return (
    <>
      <div className={styles["pop-text"]}>
        <p>Вы уверены, что хотите выйти назад?</p>
        <span style={{"fontSize":"50px"}}>🤔</span>
        <span className={styles["pop-span"]}>Весь прогресс откатится.</span>
      </div>
      <div className={styles.buttons}>
        <button 
          className={styles.back} 
          style={{"borderColor": "red", "color": "red"}} 
          onClick={submit}
        >
          Да
        </button>
        <button 
          className={styles.back} 
          onClick={() => setIsPopOpen(false)}>Нет
        </button>
      </div>
    </>
  );
};