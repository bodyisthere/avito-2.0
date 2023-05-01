import { IRowingBoats } from "./IRowingBoats";

type techTypes = "-Не выбрано-" | "Лодочный мотор" | "Лодка ПВХ(надувная)" | "Лодка RIB(комбинированная)" | "Лодка с жестким корпусом"

export interface MotorboatsAndMotorsBase extends IRowingBoats {
  type: techTypes | null
  brand: string | null
  yearOfIssue: string | null
}

interface IInflatable extends MotorboatsAndMotorsBase { 
  type: "Лодка ПВХ(надувная)" | "Лодка RIB(комбинированная)" | "-Не выбрано-"
  typeOfBottom: string | null
  length: string | null
  width: string | null
  transomHeight: string | null
  weight: string | null
  maxPassengers: string | null
  power: string | null
  trailerIncluded: boolean | null
}

interface IRigid extends MotorboatsAndMotorsBase{
  type: "Лодка с жестким корпусом"
  length: string | null
  width: string | null
  transomHeight: string | null
  weight: string | null
  maxPassengers: string | null
  power: string | null
  trailerIncluded: boolean | null
  motorIncluded: boolean | null
}

interface IMotor extends MotorboatsAndMotorsBase{
  type: "Лодочный мотор"
  weight: string | null
  power: string | null
  typeOfMotor: string | null
  legLength: string | null
  control: string | null
  engineStarting: string | null
}

export type IMotorboatsAndMotors = IInflatable | IMotor | IRigid