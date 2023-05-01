//импорт внешних пакетов
import React, { useEffect, useState } from "react";

//импорт стилей

//импорт типов
import { ILocation } from "../../../types/ILocation";

//импорт функционала
import { yMapApi } from "../../../store/api/yMapApi";
import { useShowError } from "../../../hooks/common-hooks/useShowError";
import { formatResultOfRequest } from "../utils/formatResultOfRequest";

//импорт компонентов

export const useMapInput = (inputValue: string) => {
  const [ yMapReq, { data , isLoading, isError, error } ] = yMapApi.useYMapGetMutation();
  const [ results, setResults ] = useState<ILocation[]>([]);

  const throwErrorFunction = useShowError();

  const geocode = () => {
    if(!inputValue) return throwErrorFunction("Локация не может быть пуста");
    yMapReq(inputValue);
  };

  useEffect(() => {
    if(isError) return throwErrorFunction("Ошибка запроса", error);

    if(!data) return;
    
    if(data.response.GeoObjectCollection.featureMember.length === 0) {
      return throwErrorFunction("По вашему запросу ничего не найдено");
    }

    setResults(formatResultOfRequest(data));
  }, [data]);

  return {
    isLoading, 
    results, setResults,
    geocode,
  };
};