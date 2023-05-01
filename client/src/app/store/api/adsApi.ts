//импорт внешних пакетов
import { createApi } from "@reduxjs/toolkit/query/react";

//импорт типов

//импорт функционала
import { baseQueryWithReauth } from "./config/baseQueryWithReauth";


export const adsApi = createApi({
  reducerPath: "ads/api",
  baseQuery: baseQueryWithReauth,
  endpoints: build => ({
    newPost: build.mutation<any, any>({
      query: body => ({
        url: "ads",
        method: "POST",
        body,
      }),
    }),
  }),
});