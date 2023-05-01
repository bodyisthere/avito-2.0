//внешние пакеты
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//типы
import { IError } from "../../../types/IError";

//текущее значение
const initialState: IError = {
  message: "",
  error: "",
  isOpen: false,
};

export const errorSlice = createSlice({
  name: "error-slice",
  initialState,
  reducers: {
    setError(state, action: PayloadAction<{message: string, error: any}>) {
      state.message = action.payload.message;
      state.error = action.payload.error;
      state.isOpen = true;
    },
    deleteError(state) {
      state.message = "";
      state.error = "";
      state.isOpen = false;
    },
  },
});

export const errorActions = errorSlice.actions;
export const errorReducer = errorSlice.reducer;