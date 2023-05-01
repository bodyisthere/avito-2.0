//импорт внешних пакетов
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//импорт типов
import { IYMap } from "../../types/IYMap";

//импорт функционала
import { yMapBaseUrl, yMapApiKey } from "../../constants/api";

export const yMapApi = createApi({
  reducerPath: "yMap/api",
  baseQuery: fetchBaseQuery( { baseUrl: yMapBaseUrl } ),
  endpoints: (build) => ({
    yMapGet: build.mutation<IYMap, string>({
      query: (data) => ({
        url: `?apikey=${yMapApiKey}&geocode=${data}&sco=latlong&format=json&results=6`,
        method: "GET",
      }),
    }),
  }),
});
