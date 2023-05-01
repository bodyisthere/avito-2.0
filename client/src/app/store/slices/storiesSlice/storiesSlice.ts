//внешние пакеты
import { createSlice } from "@reduxjs/toolkit";

//типы
import { IStory } from "../../../types/IStory";

//текущее значение
const initialState: IStory = {
  isOpen: false,
};

export const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    toggleOpen(state) {
      if(state.isOpen) {
        state.isOpen = false;
      } else {
        state.isOpen = true;
      }
    },
  },
});

export const storiesActions = storiesSlice.actions;
export const storiesReducer = storiesSlice.reducer;