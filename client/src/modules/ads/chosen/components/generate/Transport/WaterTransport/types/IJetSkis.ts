import { IRowingBoats } from "./IRowingBoats";

export interface IJetSkis extends IRowingBoats{
  brand: string | null
  yearOfIssue: number | null
  maxPassengers: number |null
  type: string | null
  power?: number | null
  engineCapacity?: number | null
  trailerIncluded?: boolean | null
}