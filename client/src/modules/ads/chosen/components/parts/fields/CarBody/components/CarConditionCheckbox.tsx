//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./CarConditionWImg.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов

interface ICarConditionCheckbox {
  data: {title: string, data: {title: string, id: string}[]}
  changeFunction: any
  dataReady: string[]
}

export const CarConditionCheckbox: FC<ICarConditionCheckbox> = ( { changeFunction, data, dataReady } ) => {
  return (
    <div className={styles.checkbox}>
      <p>{data.title}</p>
      <ul className={styles["checkbox-list__list"]}>
        {
          data.data.map((el, index) => {
            return (
              <li key={index} >
                <label>
                  <input type="checkbox" onChange={() => changeFunction(el.id)} checked={el.id ? dataReady.includes(el.id) ? true : false : false}/>
                  {el.title}
                </label>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};