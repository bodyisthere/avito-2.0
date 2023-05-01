import { ILocation } from "./ILocation";

interface IUserInfo {
  name: string,
  _id: string,
  email: string,
  avatar: string,
  isActivated: boolean,
  roles: string[],
  contactInfo: TContactInfo,
  ads: string[],
  favorites: string[],
  cart: string[],
  dialogues: string[],
  wallet: number,
  notifications: string[],
  reviews: {
    //отзывы мне
    toMe: {
      reviewsList: string[],
      rate: number,
    },
    //отзывы, которые я оставил
    others: string[]
  },
  followers: string[],
  follow: string[],
}

type TContactInfo = {
  location: ILocation,
  phoneNumber: string,
}

export interface IUser {
  isAuth: boolean,
  isAuthPopOpen: boolean,
  accessToken: string,
  refreshToken: string,
  data: IUserInfo
}
