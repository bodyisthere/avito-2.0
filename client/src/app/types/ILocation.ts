
export type TLocation = { title: string, coordinates: number[] } | null

export interface ISearchLocation {
  city: TLocation
  subway: string[] | null
  subways: string[] | null
  district: string[] | null
  districts: string[] | null
  radius: TLocation
}

export interface ILocationAddress {
  country: string
  province: string
  area?: string
  locality: string
  street?: string
  house?: string
}

export interface ILocation {
  textLine: string,
  coordinates: number[],
  full: ILocationAddress
}

export interface ICity {
  isPopular: boolean,
  _id: string,
  region: string,
  city: string,
  districts: string[] | [],
  metro: string[] | [],
}