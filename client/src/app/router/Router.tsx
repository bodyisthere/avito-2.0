//импорт внешних пакетов
import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

//импорт стилей

//импорт типов

//импорт функционала
import { routes } from "./routes.data";

//импорт компонентов

interface IRouter {

}

export const Router: FC<IRouter> = () => {
  return (
    <Routes>
      {
        routes.map((route, index) => {
          return (
            <Route 
              path={route.path} 
              element={<route.element />}
              key={index}
            >
            </Route>
          );
        })
      }
    </Routes>
  );
};