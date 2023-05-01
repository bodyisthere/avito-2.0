export interface IAdsBaseField {
  form: any
  setFunction: (key: string, value: any) => void
}

export interface IAdsValidationError extends IAdsBaseField{
  validationErrors: string[]
}

