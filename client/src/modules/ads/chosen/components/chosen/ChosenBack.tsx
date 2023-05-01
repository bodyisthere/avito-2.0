//импорт внешних пакетов
import React, { FC, useState } from "react";

//импорт стилей

//импорт типов

//импорт функционала

//импорт компонентов
import { PopUp, Button } from "../../../../../ui";
import { ChosenPop } from "./ChosenPop";

interface IChosenBack {

}

export const ChosenBack: FC<IChosenBack> = () => {
  const [ isPopOpen, setIsPopOpen ] = useState<boolean>(false);

  const openPop = () => setIsPopOpen(true);

  return (
    <>
      { 
        isPopOpen 
        && 
        <PopUp closeFunction={setIsPopOpen}>
          <ChosenPop setIsPopOpen={setIsPopOpen}/>
        </PopUp> 
      }
      <Button onClick={openPop} title="Назад">
        <i className="fa-solid fa-arrow-left"></i>
      </Button>
    </>
  );
};