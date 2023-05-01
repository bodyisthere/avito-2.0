//импорт внешних пакетов
import { useState, useEffect } from "react";

//импорт стилей

//импорт типов
import { ILocation } from "../../../types/ILocation";

//импорт функционала

//импорт компонентов

interface IZoomControlParameters {
  adjustMapMargin?: boolean | undefined,
  position?: {
    top?: number | string | "auto" | undefined;
    right?: number | string | "auto" | undefined;
    bottom?: number | string | "auto" | undefined;
    left?: number | string | "auto" | undefined;
  } | undefined,
  size?: "small" | "large" | "auto" | undefined,
  visible?: boolean | undefined,
  zoomDuration?: number | undefined,
  zoomStep?: number | undefined

}

interface IRadiusOptions {
  cursor?: string | undefined;
  draggable?: boolean | undefined;
  fill?: boolean | undefined;
  fillColor?: string | undefined;
  fillImageHref?: string | undefined;
  fillMethod?: "stretch" | "tile" | undefined;
  fillOpacity?: number | undefined;
  hasBalloon?: boolean | undefined;
  hasHint?: boolean | undefined;
  hideIconOnBalloonOpen?: boolean | undefined;
  interactiveZIndex?: boolean | undefined;
  opacity?: number | undefined;
  openBalloonOnClick?: boolean | undefined;
  openEmptyBalloon?: boolean | undefined;
  openEmptyHint?: boolean | undefined;
  openHintOnHover?: boolean | undefined;
  outline?: boolean | undefined;
  pane?: string | undefined;
  strokeColor?: string[][] | string[] | string | undefined;
  strokeOpacity?: number[][] | number[] | number | undefined;
  strokeStyle?: string[][][] | object[][] | string[] | object[] | string | object | undefined;
  strokeWidth?: number[][] | number[] | number | undefined;
  syncOverlayInit?: boolean | undefined;
  useMapMarginInDragging?: boolean | undefined;
  visible?: boolean | undefined;
  zIndex?: number | undefined;
  zIndexActive?: number | undefined;
  zIndexDrag?: number | undefined;
  zIndexHover?: number | undefined;
}

interface IDefaultState {
  center: number[];
  controls: string[]
  zoom: number | undefined;
}

export const useMapSettings = (
  location: ILocation | undefined, 
  control: Array<"zoom" | "placemark" | "geolocation" | "input" | "radius">,
) => {
  const [ inputValue, setInputValue ] = useState<string>("");

  const [ isDraggable, setIsDraggable ] = useState<boolean>(control.includes("input") ? true : false);

  const [ defaultState, setDefaultState ] = useState<IDefaultState>({ 
    center: [55.755811, 37.617617], 
    zoom: 9,
    controls: [],
  });

  const [ placemarkCoordinates, setPlacemarkCoordinates ] = useState<number[]>([
    55.755811, 37.617617,
  ]);

  const [ zoomConfig, setZoomConfig ] = useState<IZoomControlParameters>({
    position: {right: "20px", bottom: "220px"},
    size: "small",
  });

  const [ radiusConfig, setRadiusConfig ] = useState<{geometry: any, options: IRadiusOptions}>(
    {
      geometry: [[55.76, 37.6], 10000],
      options: {
        draggable: false,
        fillColor: "#DB709377",
        strokeColor: "#990066",
        strokeOpacity: 0.8,
        strokeWidth: 5,
      },
    },
  );

  useEffect(() => {
    if(!location || !location.coordinates || !location.full || !location.textLine) return;
    setPlacemarkCoordinates(location.coordinates);
    setDefaultState({
      center: location.coordinates, 
      zoom: 9,
      controls: [],
    });
    setInputValue(location.textLine);
  }, []);

  return {
    placemarkCoordinates, setPlacemarkCoordinates,
    defaultState, setDefaultState,
    zoomConfig,
    inputValue, setInputValue,
    isDraggable,
    radiusConfig, setRadiusConfig,
  };
};