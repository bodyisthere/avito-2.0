import { IKarting } from "./IKarting";

export interface MopenAndScooterBase extends IKarting {
  brand: string | null
  type: string | null
  yearOfIssue: number | null
  availability: "В наличии" | "Под заказ" | null
  vehiclePassportOwners?: "1" | "2" | "3" | "4+" | null
  vehiclePassport: "Оригинал" | "Дубликат" | "Электронный" | "Нет" | null

  additionalOptions: string[] |  null
  mileage?: number | null
}

export interface MopenAndScooterBenzin extends MopenAndScooterBase {
  typeOfEngine: "Бензин"
  power: number | null
  engineCapacity: number | null
  fuelSupply?: "Карбюратор" | "Инжектор" | null
  numberOfCycles?: 2 | 4 | null
  typeOfDrive?: "Цепь" | "Ремень" | "Кардан" | null
  cooling?: "Воздушное" | "Жидкостное" | null
}

export interface MopenAndScooterElectro extends MopenAndScooterBase {
  typeOfEngine: "Электро"
  power: number | null
  maxSpeed: number | null
  batteryCapacity: number | null
  powerReserve: number | null
  chargingTime: number | null
}

export interface MopenAndScooterNull extends MopenAndScooterBase {
  typeOfEngine: null
}

export type IMopenAndScooter = MopenAndScooterBenzin | MopenAndScooterElectro | MopenAndScooterNull;