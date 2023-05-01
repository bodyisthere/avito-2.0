import { IDamagedPositions } from "./IDamagedPositions";

export interface ICarConditionFBLR {
  activeSpans: string[]
  damagedPlaces: {
    position: string;
    id: string;
    places: {
        title: string;
        id: string;
        points: string[] | null;
    }[];
  }[]
  data: IDamagedPositions
  setActiveSlideCategory: React.Dispatch<React.SetStateAction<any>>
  activeSlideCategory: any
}