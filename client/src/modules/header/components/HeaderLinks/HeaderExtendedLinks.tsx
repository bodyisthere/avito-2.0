//импорт внешних пакетов
import React, { FC } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from "../Header.module.scss";
import burger from "../HeaderBurger/HeaderBurger.module.scss";

//импорт типов

//импорт функционала
import { extendedLinks } from "../../data/extendedLinks.data";

//импорт компонентов

interface IHeaderExtendedLinks {
  setShowDropMenu: React.Dispatch<React.SetStateAction<boolean>>;
  type?: "burger" | "common"
}

export const HeaderExtendedLinks: FC<IHeaderExtendedLinks> = ( { setShowDropMenu, type = "common" } ) => {
  const close = () => setShowDropMenu(false);

  return (
    <div>
      {  
        extendedLinks.map((section, index) => {
          return (
            <ul className={type === "common" ? styles.extended : ""} key={index}>
              {
                section.map((link, i) => {
                  return (
                    <li className={type === "common" ? styles.item : burger.item} key={i} onClick={close}>
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  );
                })
              }
            </ul>
          );
        })
      }
    </div>
  );
};