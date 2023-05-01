import x2 from "../../../../app/assets/img/x2.png";
import x5 from "../../../../app/assets/img/x5.png";
import x10 from "../../../../app/assets/img/x10.png";
import x15 from "../../../../app/assets/img/x15.png";
import x20 from "../../../../app/assets/img/x20.png";

export type TBooster = "x2" | "x5" | "x10" | "x15" | "x20"

export interface IAdsBoost {
  name: TBooster
  img: any
  priceSeven: string
  priceOne: string
  background: string 
}

export const adsBoost: IAdsBoost[] = [
  { name: "x2",img: x2, priceSeven: "80", priceOne: "22", background: "radial-gradient(80% 80% at 20% 20%, rgb(255, 232, 232) 40%, rgba(255, 232, 232, 0) 100%), radial-gradient(60% 60% at 100% 100%, rgb(255, 236, 201) 30%, rgba(255, 236, 201, 0) 97.92%), rgb(255, 239, 224)" },
  { name: "x5",img: x5, priceSeven: "160", priceOne: "44", background: "radial-gradient(80% 80% at 20% 20%, rgb(255, 240, 212) 40%, rgba(255, 232, 232, 0) 100%), radial-gradient(60% 60% at 100% 100%, rgb(227, 249, 199) 30%, rgba(255, 236, 201, 0) 97.92%), rgb(240, 252, 207)" },
  { name: "x10",img: x10, priceSeven: "270", priceOne: "80", background: "radial-gradient(80% 80% at 20% 20%, rgb(227, 249, 199) 40%, rgba(255, 232, 232, 0) 100%), radial-gradient(60% 60% at 100% 100%, rgb(217, 241, 255) 30%, rgba(255, 236, 201, 0) 97.92%), rgb(230, 247, 245)" },
  { name: "x15",img: x15, priceSeven: "405", priceOne: "120", background: "radial-gradient(80% 80% at 20% 20%, rgb(224, 244, 255) 40%, rgba(255, 232, 232, 0) 100%), radial-gradient(60% 60% at 100% 100%, rgb(240, 231, 254) 30%, rgba(255, 236, 201, 0) 97.92%), rgb(235, 240, 252)" },
  { name: "x20",img: x20, priceSeven: "540", priceOne: "160", background: "radial-gradient(80% 80% at 20% 20%, rgb(244, 238, 254) 40%, rgba(255, 232, 232, 0) 100%), radial-gradient(60% 60% at 100% 100%, rgb(255, 230, 230) 30%, rgba(255, 236, 201, 0) 97.92%), rgb(252, 237, 240)" },
];

export const priceForColor = 34;
export const priceForXL = 34;