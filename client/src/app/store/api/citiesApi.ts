//импорт внешних пакетов
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//импорт типов
import { ICity } from "../../types/ILocation";

//импорт функционала
import { baseUrl } from "../../constants/api";

export const citiesApi = createApi({
  reducerPath: "cities/api",
  baseQuery: fetchBaseQuery( { baseUrl } ),
  endpoints: (build) => ({
    getCities: build.query<ICity[], string>({
      query: (city: string) => ({
        url: "get-cities",
        method: "GET",
        params: {
          city,
        },
      }),
    }),
    getPopularCities: build.query<ICity[], void>({
      query: () => ({
        url: "get-popular-cities",
        method: "GET",
      }),
    }),
    getRepublics: build.query<string[], void>({
      query: () => ({
        url: "get-republics",
        method: "GET",
      }),
    }),
    getCitiesByRepublic: build.query<ICity[], string>({
      query: (republic) => ({
        url: "get-cities-by-republic",
        method: "GET",
        params: {
          republic,
        },
      }),
    }),
    getCity: build.query<ICity, string>({
      query: (cityId) => ({
        url: "get-city",
        method: "GET",
        params: {
          city: cityId,
        },
      }),
    }),
  }),
});