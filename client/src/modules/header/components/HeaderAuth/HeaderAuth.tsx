//импорт внешних пакетов
import { FC, useState } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from "./HeaderAuth.module.scss";

//импорт типов

//импорт функционала
import { useAppSelector } from "../../../../app/hooks/redux-hooks";
import { userLinks } from "../../data/userLinks.data";

//импорт компонентов
import { HeaderDropMenu } from "../HeaderDropMenu/HeaderDropMenu";
import { baseImg } from "../../../../app/constants/api";

interface IHeaderAuth {

}

export const HeaderAuth: FC<IHeaderAuth> = () => {
  const { name, avatar } = useAppSelector((state) => state.userReducer.data);

  const [ showDropMenu, setShowDropMenu ] = useState<boolean>(false);

  return (
    <>
      <ul className={styles.list}>
        {
          userLinks.map((el, index) => {
            return (
              <li className={styles.item} title={el.title} key={index}>
                <Link to={el.link}><i className={el.icon}></i></Link>
              </li>
            );
          })
        }
      </ul>
      <div className={styles.profile}>
        <div className={styles.inprofile} onClick={() => {if(window.innerWidth <= 768) return;setShowDropMenu(!showDropMenu);}}>
          <img src={`${baseImg}${avatar}`} alt={name} className={styles.img}/>
          <p className={styles.name}>{name}</p>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        {showDropMenu && <HeaderDropMenu setShowDropMenu={setShowDropMenu} />}
      </div>
    </>
  );
};