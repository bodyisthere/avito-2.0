//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import standart from "../../../../styles/ads.module.scss";

//импорт типов
import { ICheckboxList } from "../../../../types/IFields";

//импорт функционала

//импорт компонентов
import { AdsCheckbox } from "../../partsOfFields/AdsCheckbox/AdsCheckbox";

export const CheckboxList: FC<ICheckboxList> = ( { fieldTitle, validate, optionKey, data, setForm } ) => {
  
  const toggleCheckbox = (el: any) => {
    setForm((prev: any) => {
      if(!prev.inspectionData) {
        prev.inspectionData = [el];
        return prev;
      }
      if(prev.inspectionData?.includes(el)) {
        prev.inspectionData = prev.inspectionData?.filter((e: any) => e !== el);
        return prev;
      } else {
        prev.inspectionData[prev.inspectionData.length] = el;
        return prev;
      }
    });
  };

  return (
    <div className={standart.item}>
      <div className={standart["item-left"]}>
        <label className={standart.subtitle}>{fieldTitle}</label>
      </div>
      <div className={standart["item-right"]}>
        <AdsCheckbox
          data={data}
          setFunction={toggleCheckbox}
        />
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