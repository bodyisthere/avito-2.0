//внешние пакеты
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//типы
import { ICategory } from "../../../types/ICategory";

//текущее значение
const initialState: ICategory[] = [];

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<ICategory[]>) {
      state = action.payload;
      return state;
    },
  },
});

export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;