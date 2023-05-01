//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей

//импорт типов

//импорт функционала

//импорт компонентов
import logo from "../../../app/assets/img/logo.png";

interface INavBar {

}

export const NavBar: FC<INavBar> = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <ul>
        
      </ul>
    </div>
  );
};