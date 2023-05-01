import { IUser } from "../../types/IUser";

export const resetUserToInitialValue: () => IUser = () => {
  return ({
    isAuth: false,
    isAuthPopOpen: false,
    accessToken: "",
    refreshToken: "",
    data: {
      name: "",
      _id: "",
      email: "",
      avatar: "",
      isActivated: false,
      roles: [],
      contactInfo: {
        location: {
          textLine: "",
          coordinates: [],
          full: {
            country: "",
            province: "",
            area: "",
            locality: "",
            street: "",
            house: "",
          },
        },
        phoneNumber: "",
      },
      ads: [],
      favorites: [],
      cart: [],
      dialogues: [],
      wallet: 0,
      notifications: [],
      reviews: {
        toMe: {
          rate: 0,
          reviewsList: [],
        },
        others: [],
      },
      followers: [],
      follow: [],
    },
  });
};