//импорт внешних пакетов
import React, { FC, useEffect, useState } from "react";
import { YMaps, Map, Placemark, Circle } from "@pbe/react-yandex-maps";

//импорт стилей
import styles from "./MapInput.module.scss";

//импорт типов
import { IYMap } from "../../../../../../../app/types/IYMap";

//импорт функционала
import { yMapApi } from "../../../../../../../app/store/api/yMapApi";

//импорт компонентов
import { CircleLoader } from "../../../../../../../ui";

interface IMapInput {
  isInput?: boolean
}

interface IMapSettings {
  placemarkCoordinates?: [number, number] | undefined
  mapCoordinates: { center: [number, number], zoom: number }
}

export const MapInput: FC<IMapInput> = ( { isInput = true } ) => {
  const [ value, setValue ] = useState<string>("");
  const [ yMapReq, { data , isLoading } ] = yMapApi.useYMapGetMutation();

  const [ mapSettings, setMapSettings ] = useState<IMapSettings>({
    placemarkCoordinates: [55.684758, 37.738521],
    mapCoordinates: { center: [55.684758, 37.738521], zoom: 9},
  });
  
  const geocode = () => {
    yMapReq(value);
  };
  
  useEffect(() => {
    console.log(data);
    setMapSettings(prev => {
      const coord = data?.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(" ").reverse().map(el => +el);
      prev.placemarkCoordinates = coord as typeof prev.placemarkCoordinates;
      return prev;
    });
  }, [data]);


  
  //поиск работает не дебаунсом и не онлайн из - за сильно ограниченного числа запросов
  return (
    <div className={styles.map}>
      {
        isInput
        &&
        <div className={styles["input-container"]}>
          <input value={value} onChange={e => setValue(e.target.value)} className={styles.input}></input>
          <button className={styles.button} onClick={() => geocode()}>
            {isLoading ? <CircleLoader size="mini" /> : "Поиск"}
          </button>
        </div>
      }
      {
        isLoading
          ?
          <YMaps>
            <Map defaultState={mapSettings.mapCoordinates} width={"99%"} height={"500px"}>
              <Placemark geometry={mapSettings.placemarkCoordinates} />
            </Map>
          </YMaps>
          :
          <YMaps>
            <Map defaultState={mapSettings.mapCoordinates} width={"99%"} height={"500px"}>
              <Placemark geometry={mapSettings.placemarkCoordinates} />
            </Map>
          </YMaps>
      }
    </div>
  );
};


// <YMaps>
//   <Map defaultState={defaultState} width={'100%'} height={'350px'} >
//     <Placemark geometry={[data.split(' ')[0], data.split(' ')[1]]} options={options} />
//   </Map>
// </YMaps>

// const [defaultState, setDefaultState] = useState<ymaps.IMapState | undefined>(undefined);
// const [data, setData] = useState<any>();

// const options: ymaps.IPlacemarkOptions | undefined = {
//   iconLayout: 'default#image',
//   iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
//   iconImageSize: [40, 40],
//   iconImageOffset: [-20, -40],
// }