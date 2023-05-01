//внешние пакеты
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { resetUserToInitialValue } from "../../utils/resetUserToInitialValue";

//типы
import { IUser } from "../../../types/IUser";

//текущее значение


const initialState: IUser = resetUserToInitialValue();


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setAuthPop: (state, action: PayloadAction<boolean>) => {
      state.isAuthPopOpen = action.payload;
    },
    successAuth: (state, action: PayloadAction<IUser>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.data = action.payload.data;
      state.isAuth = true;
      localStorage.setItem("token", action.payload.accessToken);
    },
    successAuthWithoutPasswordRemember: (state, action: PayloadAction<IUser>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.data = action.payload.data;
      state.isAuth = true;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state = resetUserToInitialValue();
    },
    setUserCityRegion: (state, action: PayloadAction<{city: {_id: string, title: string}, region: string}>) => {
      // state.data.contactInfo.location.city = action.payload.city;
      // state.data.contactInfo.location.region = action.payload.region;
    },
    setUserDistrict: (state, action: PayloadAction<string>) => {
      // state.data.contactInfo.location.district = action.payload;
    },
    setUserSubway: (state, action: PayloadAction<string>) => {
      // state.data.contactInfo.location.subway = action.payload;
    },
    setUserAvatar: (state, action: PayloadAction<string>) => {
      state.data.avatar = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;