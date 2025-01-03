//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./Settings.module.scss";

//импорт типов

//импорт функционала
import { useAppSelector } from "../../../app/hooks/redux-hooks";

//импорт компонентов

interface ISettingsEmail {

}

export const SettingsEmail: FC<ISettingsEmail> = () => {
  const { isActivated } = useAppSelector(state => state.userReducer.data);

  return (
    <div className={styles["setting-module__section"]}>
      <div className={styles["setting-module__mail"]}>
        <div className={styles["setting-module__mail-e"]}>
            artemka.lunev@mail.ru
          <span><i className="fa-solid fa-pen"></i></span>
        </div>
        {
          isActivated 
            ? 
            <div className={`${styles["setting-module__mail-condition"]} ${styles["setting-module__mail-condition--green"]}`}>
              <i className="fa-solid fa-check"></i>Подтверждён
            </div> 
            : 
            <div className={`${styles["setting-module__mail-condition"]} ${styles["setting-module__mail-condition--red"]}`}>
              <i className="fa-solid fa-xmark"></i>Не подтверждён
            </div> 
        }
      </div>
    </div>
  );
};