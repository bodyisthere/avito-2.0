//импорт внешних пакетов
import React, { FC, useState, useEffect } from "react";

//импорт стилей
import standart from "../../../../styles/ads.module.scss";

//импорт типов
import { ILocation } from "../../../../../../../app/types/ILocation";

//импорт функционала

//импорт компонентов
import { MapCustom } from "../../../../../../../app/components";

interface IMapAds {
  setFunction: (key: string, value: any) => void
  optionKey: string
  validationErrors: string[]
}

export const MapAds: FC<IMapAds> = ( { setFunction, validationErrors, optionKey }) => {
  const [location, setLocation] = useState<ILocation>();

  useEffect(() => {
    if(!location) return;
    setFunction(optionKey, location);
  }, [location]);

  return (
    <div className={standart.item}>
      <div className={`${standart["item-right"]} ${standart.map}`}>
        <MapCustom 
          control={["geolocation", "input", "placemark", "zoom"]} 
          width={"60%"}
          setLocation={setLocation}
        />    
        {
          validationErrors.includes(optionKey) 
          && 
          <span className={standart["error-text"]}><br/>Выберите место сделки</span>
        }
      </div>
    </div>
  );
};