import React, { FC, useEffect, useState } from "react";

import styles from "./CircleLoader.module.scss";

interface ICircleLoader {
  size?: "mini" | "small" | "medium" | "big"
}

export const CircleLoader: FC<ICircleLoader> = ( { size = "medium"} ) => {

  const [ mainWidth, setMainWidth ] = useState<number>();
  const [ addWidth, setAddWidth ] = useState<number>();

  const classConfigure = () => {
    switch (size) {
    case "big":
      setMainWidth(80);
      setAddWidth(64);
      break;
    case "medium":
      setMainWidth(70);
      setAddWidth(54);
      break;
    case "small":
      setMainWidth(60);
      setAddWidth(34);
      break;
    case "mini":
      setMainWidth(50);
      setAddWidth(24);
      break;
    }
  };

  useEffect(() => {
    classConfigure();
  }, []);

  return (
    <div className={styles["loader"]} style={{"width": `${mainWidth}px`, "height": `${mainWidth}px`}}>
      <div style={{"width": `${addWidth}px`, "height": `${addWidth}px`}}></div>
      <div style={{"width": `${addWidth}px`, "height": `${addWidth}px`}}></div>
      <div style={{"width": `${addWidth}px`, "height": `${addWidth}px`}}></div>
      <div style={{"width": `${addWidth}px`, "height": `${addWidth}px`}}></div>
    </div>
  );
};