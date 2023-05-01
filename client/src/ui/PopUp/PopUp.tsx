//импорт внешних пакетов
import React, { FC, useEffect } from "react";

//импорт стилей
import styles from "./PopUp.module.scss";

//импорт типов

//импорт функционала
import { scrollAllow } from "../../app/utils/scrollAlow";
import { scrollBlock } from "../../app/utils/scrollBlock";

//импорт компонентов

interface IPopUp {
  children: any
  closeFunction: any
}

export const PopUp: FC<IPopUp> = ( { children, closeFunction } ) => {

  useEffect(() => {
    scrollBlock(document);
    return () => scrollAllow(document);
  }, []);

  const closePop = () => {
    closeFunction(false);
  };

  return (
    <div className={styles.popup} onClick={closePop}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.close} onClick={closePop}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        { children }
      </div>
    </div>
  );
};