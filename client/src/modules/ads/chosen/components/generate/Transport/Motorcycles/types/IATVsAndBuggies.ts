import { ISnowmobilesExtended } from "./ISnowmobiles";

export interface IATVsAndBuggies extends ISnowmobilesExtended {
  fuelSupply?: "Карбюратор" | "Инжектор" | null
  typeOfDrive?: "Цепь" | "Ремень" | "Кардан" | null
}