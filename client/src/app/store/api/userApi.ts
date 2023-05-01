//импорт внешних пакетов
import { createApi } from "@reduxjs/toolkit/query/react";

//импорт типов

//импорт функционала
import { baseQueryWithReauth } from "./config/baseQueryWithReauth";

export const userApi = createApi({
  reducerPath: "user/api",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    avatarChange: build.mutation<any, string>({
      query: (body) => ({
        url: "avatar-change",
        method: "POST",
        body: {
          avatar: body,
        },
      }),
    }),
    locationChange: build.mutation<any, {city: {_id: string, title: string}, region: string, subway: string}>({
      query: (body) => ({
        url: "location-change",
        method: "POST",
        // headers: {authorization : `Bearer ${localStorage.getItem("token")}`},
        body,
      }),
    }),
  }),
});
