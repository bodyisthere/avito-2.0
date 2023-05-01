//импорт внешних пакетов
import React, { FC, useState } from "react";

//импорт стилей
import standart from "../../../../styles/ads.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов
import { AdsInput } from "../../partsOfFields/AdsInput/AdsInput";
import { Tip } from "../../partsOfFields/Tips/Tip";

interface IFieldWithInput {
  //мера длины
  after?: string
  //значение инпута
  value: string | number
  //заголовок слева
  fieldTitle: string
  //ключ установки даты
  optionKey: string
  setFunction: (key: string, value: any) => void
  //инфа о валидации
  validate?: {
    validationErrors: string[],
    validationMessage: string,
  }
  tip?: {
    type: "VIN(номер кузова)" | "Состояние машины" | "ПТС машины",
  }
}

export const FieldWithInput: FC<IFieldWithInput> = ( { fieldTitle, optionKey, setFunction, validate, value, after, tip } ) => {
  const [isTip, setIsTip] = useState<boolean>(false);

  return (
    <div className={standart.item}>
      <div className={standart["item-left"]}>
        <label className={standart.subtitle}>{fieldTitle}</label>
        {
          tip
          &&
          <div className={standart.tip} onClick={() => setIsTip(!isTip)}>
            ?
            { isTip && <Tip setIsTipOpen={setIsTip} type={tip.type}/> }
          </div>
        }
      </div>
      <div className={standart["item-right"]}>
        <AdsInput 
          after={after ? after : ""}
          optionKey={optionKey}
          value={value ? value : ""}
          onChange={(e: any) => setFunction(optionKey, e.target.value)}
        />
        {
          validate
          &&
          validate.validationErrors.includes(optionKey) 
          && 
          <span className={standart["error-text"]}><br/>{validate.validationMessage}</span>
        }
      </div>
    </div>
  );
};