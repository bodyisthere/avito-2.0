//импорт внешних пакетов
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from "./Header.module.scss";

//импорт типов

//импорт функционала
import { useAppSelector, useActions } from "../../../app/hooks/redux-hooks";
import { useShowError } from "../../../app/hooks/common-hooks/useShowError";

//импорт компонентов
import { HeaderBurger } from "./HeaderBurger/HeaderBurger";
import { HeaderBurgerIcon } from "./HeaderBurger/HeaderBurgerIcon";
import { HeaderAuth } from "./HeaderAuth/HeaderAuth";
import { HeaderNoAuth } from "./HeaderAuth/HeaderNoAuth";
import { HeaderOtherLinks } from "./HeaderLinks/HeaderOtherLinks";
import { Button } from "../../../ui";

interface IHeader {

}

export const Header: FC<IHeader> = () => {
  const [ isBurgerOpen, setIsBurgerOpen ] = useState<boolean>(false);

  const { isAuth } = useAppSelector(state => state.userReducer);
  const { setAuthPop } = useActions();
  const throwErrorFunction = useShowError();

  const newAds = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isAuth) {
      throwErrorFunction("Сначала авторизуйтесь");
      setAuthPop(true);
      e.preventDefault();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderBurgerIcon 
          isBurgerOpen={isBurgerOpen} 
          setIsBurgerOpen={setIsBurgerOpen}
        />
        <div className={styles.left}>
          <HeaderOtherLinks />
        </div>
        {
          isBurgerOpen 
          && 
          <HeaderBurger setIsBurgerOpen={setIsBurgerOpen} />
        }
        <div className={styles.right}>
          {
            isAuth 
              ? 
              <HeaderAuth /> 
              : 
              <HeaderNoAuth />
          }
          <Button className={styles.post} >
            <Link to="/addads" data-testid="new-ads" onClick={(e) => newAds(e)}>
              Разместить объявление
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};