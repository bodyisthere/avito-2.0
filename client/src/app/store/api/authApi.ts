//импорт внешних пакетов
import { createApi } from "@reduxjs/toolkit/query/react";

//импорт типов
import { ILoginEnterData, IRegEnterData } from "../../types/IAuth";

//импорт функционала
import { baseQuery } from "./config/baseQuery";

export const authApi = createApi({
  reducerPath: "auth/api",
  baseQuery,
  endpoints: (build) => ({
    login: build.mutation<any, ILoginEnterData>({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),
    registration: build.mutation<any, IRegEnterData>({
      query: (body) => ({
        url: "registration",
        method: "POST",
        body,
      }),
    }),
    checkAuth: build.query<any, void>({
      query: () => ({
        url: "refresh",
      }),
    }),
    logout: build.query<any, void>({
      query: () => ({
        url: "logout",
      }),
    }),
  }),
});