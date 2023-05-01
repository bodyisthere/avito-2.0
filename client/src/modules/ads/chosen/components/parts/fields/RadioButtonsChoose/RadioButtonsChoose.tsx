//импорт внешних пакетов
import React, { FC, useLayoutEffect, useState } from "react";

//импорт стилей
import styles from "./RadioButtonsChoose.module.scss";
import standart from "../../../../styles/ads.module.scss";

//импорт типов
import { Tip } from "../../partsOfFields/Tips/Tip";
import { tipTypes } from "../../../../types/IFields";;

//импорт функционала

//импорт компонентов

export interface IRadioButtonChoose {
  //заголовок слева
  fieldTitle: string
  //дата для кнопок
  data: string[]
  //ключ установки даты
  optionKey: string
  setFunction: (key: string, value: any) => void
  //инфа о валидации
  validate?: {
    validationErrors: string[],
    validationMessage: string,
  }
  //выбранный элемент
  value: any
  tip?: {
    type: tipTypes,
  }
}

export const RadioButtonsChoose: FC<IRadioButtonChoose> = ({ data, optionKey, setFunction, value, fieldTitle, validate, tip }) => {
  const [id, setId] = useState<number>();
  const [isTip, setIsTip] = useState<boolean>(false);

  useLayoutEffect(() => {
    setId(Math.random());
  }, []);

  return (
    <div className={standart.item}>
      <div className={standart["item-left"]}>
        <label className={standart.subtitle}>{fieldTitle}</label>
        {
          tip
          &&
          <div className={standart.tip} onClick={() => setIsTip(!isTip)}>
            ?
            { isTip && <Tip setIsTipOpen={setIsTip} type={tip.type} /> }
          </div>
        }
      </div>
      <div className={standart["item-right"]}>
        <div className={styles.radio}>
          {
            data.map((el, index) => {
              return (
                <label className={`${styles.label} ${value === el ? styles.active : ""}`} key={index} onClick={() => setFunction(optionKey, el)}>
                  <input type="radio" className={styles.input} name={String(id)}/>
                  <span className={styles.span}>{el}</span>
                </label>
              );
            })
          }
        </div>
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