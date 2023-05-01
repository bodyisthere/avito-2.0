import { Link } from "react-router-dom";

import styles from "../components/SideBar.module.scss";

import { sideBarRoutes } from "../data/sideBarRoutes.data";


export const generateLi = (index: number) => {
  const url = window.location.pathname;
  return (
    sideBarRoutes[index].map((link, i) => {
      return (
        <li className={`${styles.link} ${url === link.link && styles["link--active"]}`} key={i}>
          <Link to={ link.link }>{ link.title }</Link>
        </li>
      );
    })
  );
};