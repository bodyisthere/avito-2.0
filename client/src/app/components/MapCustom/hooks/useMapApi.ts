//импорт внешних пакетов
import { useEffect } from "react";

//импорт стилей

//импорт типов

//импорт функционала
import { yMapApi } from "../../../store/api/yMapApi";
import { formatResultOfRequest } from "../utils/formatResultOfRequest";

//импорт компонентов


export const useMapApi = (placemarkCoordinates: any, setDefaultState: any, setInputValue: any, setLocation: any) => {
  const [ yMapReq, { data } ] = yMapApi.useYMapGetMutation();

  useEffect(() => {
    if(!placemarkCoordinates) return;
    yMapReq(placemarkCoordinates.join(","));
  }, [ placemarkCoordinates ]);
  
  useEffect(() => {
    if(!data) return;
    const textLine = data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;
    setDefaultState({
      center: placemarkCoordinates,
      zoom: 9,
      controls: [],
    });
    setInputValue(textLine);
    const res = formatResultOfRequest(data)[0];
    if(!setLocation || !res) return;
    setLocation(res);
  }, [ data ]);
};