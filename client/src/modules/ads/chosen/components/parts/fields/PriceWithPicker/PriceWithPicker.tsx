//импорт внешних пакетов
import React, { FC, useState } from "react";

//импорт стилей
import standart from "../../../../styles/ads.module.scss";

//импорт типов
import { IPriceWithPicker } from "../../../../types/IFields";

//импорт функционала

//импорт компонентов
import { AdsInput } from "../../partsOfFields/AdsInput/AdsInput";
import { Select } from "../../../../../../../ui";
import { Tip } from "../../partsOfFields/Tips/Tip";

export const PriceWithPicker: FC<IPriceWithPicker> = ( { fieldTitle, optionKey, setFunction, validate, value, after, tip } ) => {
  const [isTip, setIsTip] = useState<boolean>(false);
  const [currency, setCurrency] = useState<string>("");

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
      <div className={standart["item-right"]} style={{"display":"flex", "alignItems":"center"}}>
        <Select 
          options={["-Не выбрано-","Рубли, ₽", "Доллары, $", "Евро, €", "Юани, ¥", "Йены, ¥"]}
          onChange={(e: any) => setCurrency(e)}
          selected={currency}
        />
        <AdsInput 
          onChange={(e: any) => setFunction(optionKey, e)}
          value={value}
          optionKey={optionKey}
          after={currency.split(", ")[1]}
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