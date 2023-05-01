import { IAdsBaseForm } from "../../../../../types/IAdsBaseForm";

export interface IKarting extends IAdsBaseForm{
  VIN?: string | null
  condition: "Новое" | "Б/У" | "На запчасти" | null
}