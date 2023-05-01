//импорт внешних пакетов
import React, { FC, useState } from "react";

//импорт стилей
import standart from "../../../../styles/ads.module.scss";

//импорт типов
import { tipTypes, ISelectField } from "../../../../types/IFields";

//импорт функционала

//импорт компонентов
import { Select } from "../../../../../../../ui";
import { Tip } from "../../partsOfFields/Tips/Tip";

export const SelectField: FC<ISelectField> = ( { fieldTitle, data, setFunction, validate, optionKey, tip, selected } ) => {
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
      <div className={standart["item-right"]} >
        <Select onChange={(e: any) => setFunction(optionKey, e)} options={["-Не выбрано-",...data]}/>
        <br/>
        {
          validate 
          && 
          validate.validationErrors.includes(optionKey) 
          && 
          <span className={standart["error-text"]}>{validate?.validationMessage}</span>
        }
      </div>
    </div>
  );
};