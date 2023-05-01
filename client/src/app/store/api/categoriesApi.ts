//импорт внешних пакетов
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//импорт типов
import { ICategory } from "../../types/ICategory";

//импорт функционала
import { baseUrl } from "../../constants/api";

export const categoriesApi = createApi({
  reducerPath: "categories/api",
  baseQuery: fetchBaseQuery( { baseUrl } ),
  endpoints: (build) => ({
    getCategories: build.query<ICategory[], void>({
      query: () => ({
        url: "get-all-categories",
        method: "GET",
      }),
    }),
  }),
});