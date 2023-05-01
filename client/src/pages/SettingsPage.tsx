//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей

//импорт типов

//импорт функционала

//импорт компонентов
import { Settings } from "../modules/settings";
import { SideBar } from "../modules/sideBar";

interface ISettingsPage {

}

export const SettingsPage: FC<ISettingsPage> = () => {
  return (
    <div>
      <Settings />
      <SideBar />
    </div>
  );
};