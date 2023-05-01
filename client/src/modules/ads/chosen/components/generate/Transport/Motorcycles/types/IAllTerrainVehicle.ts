import { IKarting } from "./IKarting";

export interface IAllTerrainVehicle extends IKarting{
  brand: string | null
  type: string | null
  yearOfIssue: number | null
  typeOfEngine: "Бензин" | "Дизель" | null
  power: number | null
  engineCapacity: number | null
  fuelSupply?: "Карбюратор" | "Инжектор" | null
  typeOfDrive?: "Цепь" | "Ремень" | "Кардан" | null
  numberOfCycles?: 2 | 4 | null
  maxPassengers: number | null
  loadCapacity?: number | null
  availability: "В наличии" | "Под заказ" | null
  mileage?: number | null
}