//импорт внешних пакетов
import React, { FC  } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from "./HeaderBurger.module.scss";

//импорт типов

//импорт функционала
import { useActions, useAppSelector } from "../../../../app/hooks/redux-hooks";
import { baseImg } from "../../../../app/constants/api";

//импорт компонентов
import { HeaderExtendedLinks } from "../HeaderLinks/HeaderExtendedLinks";
import { HeaderOtherLinks } from "../HeaderLinks/HeaderOtherLinks";
import { otherLinks } from "../../data/otherLinks.data";

interface IHeaderBurger {
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderBurger: FC<IHeaderBurger> = ( { setIsBurgerOpen } ) => {
  const { avatar, name } = useAppSelector(state => state.userReducer.data);
  const { setAuthPop } = useActions();

  const newPost = (e: any) => {
    if(!avatar) {
      setAuthPop(true);
      e.preventDefault();
    };
  };

  return(
    <div className={styles.burger} onClick={() => setIsBurgerOpen(false)}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <ul className={styles.list}>
          {
            avatar
              ?
              <>
                <li className={styles.avatar}>
                  <img src={`${baseImg}${avatar}`} alt="" />
                  <p>{name}</p>
                </li>
                <HeaderExtendedLinks type="burger" setShowDropMenu={setIsBurgerOpen}/>
              </>
              :
              <button className={styles.enter} onClick={() => setAuthPop(true)}>
                Вход и регистрация
              </button>
          }
          <HeaderOtherLinks type="burger" burgerClose={setIsBurgerOpen}/>
          <button className={styles.enter}>
            <Link to="/addads" onClick={(e) => newPost(e)}>
              Разместить объявление
            </Link>
          </button>
        </ul>
      </div>
    </div>
  );
};