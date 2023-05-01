//импорт внешних пакетов
import React, { FC, useState } from "react";

//импорт стилей
import styles from "./App.module.scss";

//импорт типов

//импорт функционала
import { useAppSelector } from "./hooks/redux-hooks";
import { useCheckAuth } from "./hooks/app-component-hooks";

//импорт компонентов
import { Header } from "../modules/header";
import { SideBar } from "../modules/sideBar";
import { NavBar } from "../modules/navBar";
import { Auth } from "../modules/auth";
import { Router } from "./router";
import { CircleLoader, ErrorDownScreen } from "../ui";
import { FileUpload } from "./components";


interface IApp {

}

export const App: FC<IApp> = () => {
  const { isAuthPopOpen, data } = useAppSelector(state => state.userReducer);
  const { isOpen: isErrorPopOpen, message } = useAppSelector(state => state.errorReducer);
  const isLoadingAuth = useCheckAuth();

  return (
    <div className={styles.app}>
      {
        isLoadingAuth
          ?
          <div className={styles.loading}>
            <CircleLoader size="big"/>
          </div>
          :
          <>
            { isErrorPopOpen && <ErrorDownScreen message={message}/> }
            { isAuthPopOpen && <Auth />}
            <Header />
            <div className={styles.content}>
              <Router />
              {/* <FileUpload /> */}
            </div>
          </>
      }
    </div>
  );
};
