//импорт внешних пакетов
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//импорт апи
import { authApi } from "./api/authApi";
import { categoriesApi } from "./api/categoriesApi";
import { citiesApi } from "./api/citiesApi";
import { userApi } from "./api/userApi";
import { adsApi } from "./api/adsApi";
import { uploadApi } from "./api/uploadApi";
import { storiesApi } from "./api/storiesApi";
import { yMapApi } from "./api/yMapApi"; 

//импорт слайсов
import { errorReducer } from "./slices/errorSlice/errorSlice";
import { userReducer } from "./slices/userSlice/userSlice";
import { categoryReducer } from "./slices/categorySlice/categorySlice";
import { locationReducer } from "./slices/locationSlice/locationSlice";
import { storiesReducer } from "./slices/storiesSlice/storiesSlice";
import { chooseReducer } from "./slices/chooseSlice/chooseSlice";

const rootReducer = combineReducers({
  storiesReducer,
  userReducer,
  categoryReducer,
  chooseReducer,
  locationReducer,
  errorReducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [citiesApi.reducerPath]: citiesApi.reducer,
  [uploadApi.reducerPath]: uploadApi.reducer,
  [storiesApi.reducerPath]: storiesApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [adsApi.reducerPath]: adsApi.reducer,
  [yMapApi.reducerPath]: yMapApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
      authApi.middleware, 
      categoriesApi.middleware, 
      citiesApi.middleware,
      uploadApi.middleware,
      storiesApi.middleware,
      userApi.middleware,
      adsApi.middleware,
      yMapApi.middleware,
    ),
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"];