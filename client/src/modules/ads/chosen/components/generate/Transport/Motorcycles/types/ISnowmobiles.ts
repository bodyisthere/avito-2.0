import { IKarting } from "./IKarting";

type engineTypes = "Бензин" | "Электро" | "Дизель"

interface ISnowmobilesBase extends IKarting{
  brand: string | null
  type: string | null
  yearOfIssue: number | null
  typeOfEngine: "Бензин" | "Электро" | null
  power: number | null
  maxPassengers: number | null
  trackWidth?: number | null
  availability: "В наличии" | "Под заказ" | null
}

export interface ISnowmobilesExtended extends ISnowmobilesBase{
  engineCapacity: number | null
  numberOfCycles?: 2 | 4 | null
  mileage?: number | null
}
  