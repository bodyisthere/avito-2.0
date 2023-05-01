import { IAdsBaseForm } from "../../../../../types/IAdsBaseForm";

export interface ITrucksAndSpeicalVehicles extends IAdsBaseForm{
  VIN: string | null 
  condition: string | null
  mileage: number | null
}