//внешние пакеты
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//типы
import { ISearchLocation, TLocation } from "../../../types/ILocation";

//текущее значение
const initialState: ISearchLocation = {
  city: null,
  subway: null,
  subways: [],
  district: null,
  districts: [],
  radius: null,
};


const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setCity(state, payload: PayloadAction<TLocation>) {
      state.city = payload.payload;
    },
    setSubway(state, payload: PayloadAction<string[]>) {
      state.subway = payload.payload;
    },
    setSubways(state, payload: PayloadAction<string[]>) {
      state.subways = payload.payload;
    },
    setDistrict(state, payload: PayloadAction<string[]>) {
      state.district = payload.payload;
    },
    setDistricts(state, payload: PayloadAction<string[]>) {
      state.districts = payload.payload;
    },
    setRadius(state, payload: PayloadAction<TLocation>) {
      state.radius = payload.payload;
    },
  },
});

export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;