//импорт внешних пакетов
import { FC, useRef } from "react";
import { YMaps, Map, Placemark, ZoomControl, GeolocationControl, Circle } from "@pbe/react-yandex-maps";

//импорт стилей
import styles from "./MapCustom.module.scss";

//импорт типов
import { ILocation } from "../../types/ILocation";

//импорт функционала
import { useShowError } from "../../hooks/common-hooks/useShowError";
import { useMapSettings } from "./hooks/useMapSettings";
import { useMapApi } from "./hooks/useMapApi";

//импорт компонентов
import { MapInput } from "./components/MapInput";
import { Button } from "../../../ui";

// interface ILocation {
//   textLine: string,
//   coordinates: number[],
//   full: any
// }

interface IMapCustom {
  control: Array<"zoom" | "placemark" | "geolocation" | "input" | "radius">
  location?: ILocation
  width?: number | string
  setLocation?: React.Dispatch<React.SetStateAction<ILocation | undefined>>
}

export const MapCustom: FC<IMapCustom> = ( { control, width, setLocation, location }) => {
  const {
    placemarkCoordinates, setPlacemarkCoordinates,
    defaultState, setDefaultState,
    zoomConfig,
    inputValue, setInputValue,
    isDraggable,
    radiusConfig, setRadiusConfig,
  } = useMapSettings(location, control);

  useMapApi(placemarkCoordinates, setDefaultState, setInputValue, setLocation);

  const placemarkRef: any = useRef<null | React.FC<React.PropsWithChildren>>(null);

  const throwErrorFunction = useShowError();

  const mapConfigure = (el: ILocation) => {
    if(el.full.country !== "Россия") return throwErrorFunction("Сайт пока работает только в России");
    if(!setLocation) return;
    setLocation(el);
  };

  const onDragEnd = () => {
    const coordinates = placemarkRef?.current?.geometry._coordinates;
    setPlacemarkCoordinates(coordinates);
    setRadiusConfig(prev => {
      prev.geometry = [coordinates, 10000];
      return prev;
    });
  };

  const onDragStart = () => {
    setRadiusConfig(prev => {
      prev.geometry = [];
      return prev;
    });
  };

  return (
    <div className={styles.map}>
      {
        control.includes("input")
        &&
        <MapInput 
          mapConfigure={mapConfigure} 
          width={width}
          inputValue={inputValue}
          setInputValue={setInputValue}
        /> 
      }
      <YMaps query={{apikey: process.env.REACT_APP_YANDEX_API_KEY}}>
        <Map defaultState={defaultState} width={width ?  width : "99%"} height={"500px"}>
          {
            control.includes("placemark")
            &&
            <Placemark 
              instanceRef={placemarkRef}
              onDragEnd={onDragEnd}
              onDragStart={onDragStart}
              defaultOptions={{draggable: isDraggable}} 
              geometry={placemarkCoordinates} 
            />
          }
          {
            control.includes("zoom")
            &&
            <ZoomControl options={zoomConfig}/>
          }
          {
            control.includes("geolocation")
            &&
            <GeolocationControl />
          }
          {
            control.includes("radius")
            &&
            <>
              <Circle
                geometry={radiusConfig.geometry}
                options={radiusConfig.options} 
              />
              <div className={styles.buttons}>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>5</Button>
                <Button>10</Button>
                <Button>15</Button>
                <Button>25</Button>
                <Button>50</Button>
                <Button>100</Button>
                <Button>150</Button>
              </div>
            </>
          }
        </Map>
      </YMaps>
    </div>
  );
};