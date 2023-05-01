//внешние пакеты
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//типы
import { IChoose, TChooseStep } from "../../../types/IChoose";

//текущее значение
const initialState: IChoose = {
  category: [],
  step: "choose",
  form: {},
};

const chooseSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryChoose(state, action: PayloadAction<string[]>) {
      state.category = action.payload;
      return state;
    },
    setChooseStep(state, action: PayloadAction<TChooseStep>) {
      state.step = action.payload;
      return state;
    },
    setNewAdsForm(state, action: PayloadAction<any>) {
      state.form = action.payload;
      return state;
    },
  },
});

export const chooseActions = chooseSlice.actions;
export const chooseReducer = chooseSlice.reducer;