import { TCarBody } from "../components/generate/Transport/Auto/types/ICarOld";

type TFilterCarBody = (carBody: TCarBody) => string[] | null

export const filterCarBody: TFilterCarBody = (carBody) => {
  const result: string[] = [];

  carBody.forEach(position => {
    position.places.forEach(place => {
      if(Array.isArray(place.points) && place.points.length !== 0) {
        result.push(...place.points);
      }
    });
  });
  
  return result.length ? result : null;
};