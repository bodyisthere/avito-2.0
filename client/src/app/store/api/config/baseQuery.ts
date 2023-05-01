import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { baseUrl } from "../../../constants/api";

export const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("token");
    if(token) headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});