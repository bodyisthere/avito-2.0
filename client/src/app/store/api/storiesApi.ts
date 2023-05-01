//импорт внешних пакетов
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./config/baseQueryWithReauth";

//импорт типов

//импорт функционала

interface IStoryResponsePost {
  data: string[]
}

interface IStoryResponseDelete {
  data: string
}

interface IStoryResponseGetOne {
  data: string
}

interface IStoryResponseGetAll {
  _id: string;
  title: string;
  cover: string;
  slides: string[];
  __v: number;
}

export const storiesApi = createApi({
  reducerPath: "stories/api",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    postStory: build.mutation<IStoryResponsePost, {title: string, slides: string[], cover: string}>({
      query: (body) => ({
        url: "story",
        method: "POST",
        body,
      }),
    }),
    deleteStory: build.mutation<IStoryResponseDelete, string>({
      query: (id) => ({
        url: `story${id}`,
        method: "DELETE",
      }),
    }),
    getOneStory: build.query<IStoryResponseGetOne, string>({
      query: (id) => ({
        url: `story${id}`,
        method: "GET",
      }),
    }),
    getAllStories: build.query<IStoryResponseGetAll[], void>({
      query: () => ({
        url: "story",
        method: "GET",
      }),
    }),
  }),
});