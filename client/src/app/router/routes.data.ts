//импорт внешних пакетов
import React from "react";

//импорт страниц
import { HomePage, page404, SettingsPage, NewAds, TestUI } from "../../pages";

interface IRoutes {
  path: string,
  element: React.FC<any>
}

export const routes: IRoutes[] = [
  {element: HomePage, path: "/"},
  {element: NewAds, path: "/addads"},
  {element: SettingsPage, path: "profile/settings"},
  {element: page404, path: "*"},
  {element: TestUI, path: "ui-test"},
];