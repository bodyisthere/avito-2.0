import { IYMap } from "../../../types/IYMap";
import { ILocation, ILocationAddress } from "../../../types/ILocation";

export const formatResultOfRequest = (data: IYMap) => {
  const featureMember = data.response.GeoObjectCollection.featureMember;
  const result: ILocation[] = [];

  featureMember.map(el => {
    const coordinates = el.GeoObject.Point.pos.split(" ").reverse().map(el => +el);
    const textLine = el.GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AddressLine;
    const addressFull = el.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components;
    const formatFull = () => {
      const full: ILocationAddress = {} as ILocationAddress;
      addressFull.forEach(el => {
        full[el.kind] = el.name;
      });
      return full;
    };

    const location = {
      coordinates,
      textLine,
      full: formatFull(),
    };
    result.push(location);
  });

  return result;
};