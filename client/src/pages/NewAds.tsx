//импорт внешних пакетов
import React, { FC } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from "./NewAds.module.scss";

//импорт типов

//импорт функционала
import { useAppSelector } from "../app/hooks/redux-hooks";

//импорт компонентов
import logo from "../app/assets/img/logo.png";
import { Choose, Chosen, Payment } from "../modules/ads";

interface INewAds {

}

export const NewAds: FC<INewAds> = () => {
  const { step } = useAppSelector(state => state.chooseReducer);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <p className={styles.title}>
          <Link to="/">
            <img src={logo} alt="Логотип" />
          </Link>
          Новое объявление
        </p>
        { step === "choose" &&  <Choose /> }
        { step === "chosen" && <Chosen /> }
        { step === "payment" && <Payment />}
      </div>
    </div>
  );
};