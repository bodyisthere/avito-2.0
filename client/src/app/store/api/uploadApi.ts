//импорт внешних пакетов
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//импорт типов

//импорт функционала
import { baseUrl } from "../../constants/api";

export const uploadApi = createApi({
  reducerPath: "upload/api",
  baseQuery: fetchBaseQuery( { baseUrl } ),
  endpoints: (build) => ({
    uploadImages: build.mutation<{data: string[]}, FormData>({
      query: (body) => ({
        url: "uploads",
        method: "POST",
        body,
      }),
      // transformResponse: (response: {data: {data: string[]}}) => data.
    }),
  }),
});