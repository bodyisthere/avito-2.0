//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./SideBar.module.scss";

//импорт типов

//импорт функционала
import { sideBarSections } from "../data/sideBarSections.data";
import { generateLi } from "../utils/generateLi";

//импорт компонентов
import { SideBarAvatar } from "./SideBarAvatar";
import { SideBarRate } from "./SideBarRate";

interface ISideBar {

}

export const SideBar: FC<ISideBar> = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.section}>
        <SideBarAvatar />
        <SideBarRate />
      </div>
      {
        sideBarSections.map((section, index) => {
          return (
            <div className={styles.section} key={index}>
              <ul className={styles.list}>
                { generateLi(section) }
              </ul>
            </div>
          );
        })
      }
    </aside>
  );
};