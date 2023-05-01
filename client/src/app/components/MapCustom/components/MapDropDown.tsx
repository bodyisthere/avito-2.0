//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "../MapCustom.module.scss";

//импорт типов
import { ILocation } from "../../../types/ILocation";

//импорт функционала

//импорт компонентов

interface IMapDropDown {
  data: ILocation[]
  setData: React.Dispatch<React.SetStateAction<ILocation[]>> 
  setValue: React.Dispatch<React.SetStateAction<string>>
  mapConfigure: any
  width?: number | string
}

export const MapDropDown: FC<IMapDropDown> = ( { data, setValue, setData, mapConfigure, width }) => {

  const onClick = (el: ILocation) => {
    setValue(el.textLine);
    setData([]);
    mapConfigure(el);
  };

  return (
    <ul 
      className={styles.dropdown} 
      style={
        {
          "width": `${width ? width : "99%"}`,
        }
      }
    >
      {
        data.length
          ?
          data.map((el, index) => {
            return <li onClick={() => onClick(el)} key={index}>{el.textLine}</li>;
          })
          :
          <p>Ничего не найдено...😞</p>
      }
    </ul>
  );
};