//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "../MapCustom.module.scss";

//импорт типов
import { ILocation } from "../../../types/ILocation";

//импорт функционала
import { useMapInput } from "../hooks/useMapInput";

//импорт компонентов
import { CircleLoader } from "../../../../ui";
import { MapDropDown } from "./MapDropDown";

interface IMapInput {
  mapConfigure: (el: ILocation) => void
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  width?: number | string
}

export const MapInput: FC<IMapInput> = ( { mapConfigure, width, inputValue, setInputValue } ) => {
  const { 
    isLoading,
    results, setResults,
    geocode,
  } = useMapInput(inputValue);

  return (
    <div className={styles["input-container"]} style={{"width": `${width ? width : "99%"}`}} >
      <input 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)} 
        className={styles.input} 
        placeholder="Введите локацию, нажмите поиск и появится список локаций"
      />
      <button className={styles.button} onClick={() => geocode()}>
        {
          isLoading 
            ? 
            <CircleLoader size="mini" /> 
            : 
            "Поиск"
        }
      </button>
      {
        !!results.length 
          && 
          <MapDropDown 
            data={results} 
            setData={setResults} 
            setValue={setInputValue}
            mapConfigure={mapConfigure}
            width={width}
          />
      }
    </div>
  );
};