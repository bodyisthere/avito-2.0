//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "../Additional.module.scss";

//импорт типов
import { IAdditionalItem } from "../../../../../types/IFields";

//импорт функционала
import { setSelect } from "../utils/setSelect";
import { setSelectCheckbox } from "../utils/setSelectCheckbox";
import { setCheckbox } from "../utils/setCheckbox";

//импорт компонентов
import { Select } from "../../../../../../../../ui";
import { AdsCheckbox } from "../../../partsOfFields/AdsCheckbox/AdsCheckbox";

export const AdditionalItem: FC<IAdditionalItem> = ( { content, title, setForm, checkboxData, selectData, keyField } ) => {
  const isCheckboxAndSelect = () => {
    return content.includes("select") && content.includes("checkbox");
  };

  const isCheckbox = () => {
    return content.includes("checkbox") && !content.includes("select");
  };

  const isSelect = () => {
    return content.includes("select") && !content.includes("checkbox");
  };

  return (
    <div className={styles.item}>
      <p className={styles.title}>{title}</p>
      {
        isCheckboxAndSelect()
        &&
        <>
          <Select 
            onChange={(e: any) => setSelectCheckbox(e, setForm, keyField, "select")}
            options={selectData ? selectData : []}
          />
          <AdsCheckbox 
            style={{"marginTop": "10px"}}
            setFunction={(e: string) => setSelectCheckbox(e, setForm, keyField, "checkbox")}
            data={checkboxData ? checkboxData : []}
          />
        </>
      }
      {
        isCheckbox()
        &&
        <AdsCheckbox 
          setFunction={(e: string) => setCheckbox(e, setForm, keyField)}
          data={checkboxData ? checkboxData : []}
        />
      }
      {
        isSelect()
        &&
        <Select 
          onChange={(e: any) => setSelect(e, setForm, keyField)}
          options={selectData ? selectData : []}
        />
      }
    </div>
  );
};