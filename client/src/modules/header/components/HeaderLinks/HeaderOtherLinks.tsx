//импорт внешних пакетов
import React, { FC } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from "../Header.module.scss";
import burger from "../HeaderBurger/HeaderBurger.module.scss";

//импорт типов

//импорт функционала
import { otherLinks } from "../../data/otherLinks.data";

//импорт компонентов

interface IHeaderOtherLinks {
  burgerClose?: React.Dispatch<React.SetStateAction<boolean>>
  type?: "burger" | "common"
}

export const HeaderOtherLinks: FC<IHeaderOtherLinks> = ( { type = "common", burgerClose } ) => {
  return (
    <ul className={type === "common" ? styles.list : ""}>
      {
        otherLinks.map((link, index) => {
          return (
            <li key={index} className={type === "common" ? styles.item : burger.item} onClick={burgerClose ? () => burgerClose(false) : () => ""}>
              <Link to={link.link}>{link.title}</Link>
            </li>
          );
        })
      }
    </ul>
  );
};