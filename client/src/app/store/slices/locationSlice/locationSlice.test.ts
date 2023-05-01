import { locationReducer, locationActions } from "./locationSlice";
import { ISearchLocation } from "../../../types/ILocation";

describe("Тест location-reducer", () => {
  const initialState: ISearchLocation = {
    city: null,
    subway: null,
    subways: [],
    district: null,
    districts: [],
    radius: null,
  };

  test("Добавление города", () => {
    expect(locationReducer(initialState, locationActions
      .setCity({coordinates: [55.755864, 37.617698], title: "Москва"})))
      .toEqual({
        city: {coordinates: [55.755864, 37.617698], title: "Москва"},
        subway: null,
        subways: [],
        district: null,
        districts: [],
        radius: null,
      });
    expect(locationReducer(initialState, locationActions
      .setCity(null)))
      .toEqual({
        city: null,
        subway: null,
        subways: [],
        district: null,
        districts: [],
        radius: null,
      });
  });
  
  test("Добавление метро", () => {
    expect(locationReducer(initialState, locationActions
      .setSubway(["Метро"])))
      .toEqual({
        city: null,
        subway: ["Метро"],
        subways: [],
        district: null,
        districts: [],
        radius: null,
      });
  });
  
  test("Добавление множества станций метро для поискового выбора", () => {
    expect(locationReducer(initialState, locationActions
      .setSubways(["Метро", "Метро", "Метро"])))
      .toEqual({
        city: null,
        subway: null,
        subways: ["Метро", "Метро", "Метро"],
        district: null,
        districts: [],
        radius: null,
      });
    
  });
  
  test("Добавление района", () => {
    expect(locationReducer(initialState, locationActions
      .setDistrict(["Район"])))
      .toEqual({
        city: null,
        subway: null,
        subways: [],
        district: ["Район"],
        districts: [],
        radius: null,
      });
  });
  
  test("Добавление множества районов для поискового выбора", () => {
    expect(locationReducer(initialState, locationActions
      .setDistricts(["Район", "Район", "Район"])))
      .toEqual({
        city: null,
        subway: null,
        subways: [],
        district: null,
        districts: ["Район", "Район", "Район"],
        radius: null,
      });
    
  });
  
  test("Установка радиуса", () => {
    expect(locationReducer(initialState, locationActions
      .setRadius({coordinates: [55.755864, 37.617698], title: "Москва"})))
      .toEqual({
        city: null,
        subway: null,
        subways: [],
        district: null,
        districts: [],
        radius: {coordinates: [55.755864, 37.617698], title: "Москва"},
      });

    expect(locationReducer(initialState, locationActions
      .setRadius(null)))
      .toEqual({
        city: null,
        subway: null,
        subways: [],
        district: null,
        districts: [],
        radius: null,
      });

  });
});