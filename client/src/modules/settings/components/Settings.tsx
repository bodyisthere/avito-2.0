//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./Settings.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов
import { SettingsEmail } from "./SettingsEmail";

interface ISettings {

}

export const Settings: FC<ISettings> = () => {
  return (
    <div>
      <p className={styles.title}>Настройки</p>
      <SettingsEmail />
    </div>
  );
};