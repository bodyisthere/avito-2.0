export interface IChoose {
  category: string[]
  step: TChooseStep
  form: {
    [key: string]: any
  }
}

export type TChooseStep = "choose" | "chosen" | "payment"