type TErrorType = {
  value: string
  msg: string
  param: string
  location: string
}

export interface IErrorValidation {
  status?: number
  data: {
    errors: TErrorType[] 
    message: string
  }
}