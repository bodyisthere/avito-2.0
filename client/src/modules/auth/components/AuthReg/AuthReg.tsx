//импорт внешних пакетов
import React, { FC, useState } from "react";

//импорт стилей

//импорт типов
import { TRegStep } from "../../types/TRegStep";
import { TCondition } from "../../types/TCondition";

//импорт функционала

//импорт компонентов
import { AuthRegFirstStep } from "./AuthRegFirstStep";
import { AuthRegSecondStep } from "./AuthRegSecondStep";

interface IAuthReg {
  setCondition: React.Dispatch<React.SetStateAction<TCondition>>
}

export const AuthReg: FC<IAuthReg> = ( { setCondition } ) => {
  const [ step, setStep ] = useState<TRegStep>("reg");

  return (
    <>
      { step === "reg" && <AuthRegFirstStep setCondition={setCondition} setStep={setStep}/> }
      { step === "send-activation-link" && <AuthRegSecondStep setCondition={setCondition}/> }
    </>
  );
};