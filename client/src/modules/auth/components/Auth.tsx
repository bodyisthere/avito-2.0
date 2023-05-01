//импорт внешних пакетов
import React, { FC, useState } from "react";

//импорт стилей
import styles from "./Auth.module.scss";

//импорт типов
import { TCondition } from "../types/TCondition";

//импорт функционала
import { useActions } from "../../../app/hooks/redux-hooks";

//импорт компонентов
import { PopUp } from "../../../ui";
import { AuthReg } from "./AuthReg/AuthReg";
import { AuthLog } from "./AuthLog/AuthLog";

interface IAuth {

}

export const Auth: FC<IAuth> = () => {
  const { setAuthPop } = useActions();
  const [ condition, setCondition ] = useState<TCondition>("log");
  
  return (
    <PopUp closeFunction={setAuthPop}>
      { condition === "log" && <AuthLog setCondition={setCondition}/> }
      { condition === "reg" && <AuthReg setCondition={setCondition}/> }
      { condition === "rec" && "" }
    </PopUp>
  );
};