export interface ILoginEnterData {
  email: string
  password: string
}

export interface IRegEnterData extends ILoginEnterData {
  name: string
}