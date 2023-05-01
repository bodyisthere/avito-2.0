import { IRowingBoats } from "./IRowingBoats";

type techTypes = "Катер" | "Моторная яхта" | "Парусная яхта" | "Суда" | "-Не выбрано-"

export interface IBoatsAndYachtsBase extends IRowingBoats {
  type: techTypes | null
  brand: string | null
  yearOfIssue: number | null
  length: string | null
  width: string | null
  draft: number | null
  maxPassengers: string | null
  material: string | null
}

interface IBoat extends IBoatsAndYachtsBase {
  type:  "Моторная яхта" | "Парусная яхта" | "Суда" | "-Не выбрано-"
}

interface IBoatExtended extends IBoatsAndYachtsBase {
  type: "Катер"
  trailerIncluded: boolean | null
  categoryOfBoat: string | null
  motor: string | null
}

export type IBoatsAndYachts = IBoatExtended | IBoat