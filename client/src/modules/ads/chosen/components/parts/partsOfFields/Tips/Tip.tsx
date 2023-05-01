//импорт внешних пакетов
import React, { FC, useRef } from "react";

//импорт стилей
import styles from "./Tips.module.scss";

//импорт типов
import { tipTypes } from "../../../../types/IFields";

//импорт функционала
import { useClosePop } from "../../../../../../../app/hooks/common-hooks";

//импорт компонентов
import { TipVIN } from "./components/TipVIN";
import { TipCarCondition } from "./components/TipCarCondition";
import { TipCarPTS } from "./components/TipCarPTS";
import { TipPrice } from "./components/TipPrice";
import { TipNDS } from "./components/TipNDS";

interface ITip {
  type: tipTypes
  setIsTipOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Tip: FC<ITip> = ( { type, setIsTipOpen } ) => {
  const tipRef = useRef<null | HTMLDivElement>(null);
  useClosePop(tipRef, setIsTipOpen);

  return (
    <div className={styles.tip}>
      {type === "VIN(номер кузова)" ? <TipVIN /> : ""}
      {type === "Состояние машины" ? <TipCarCondition /> : ""}
      {type === "ПТС машины" ? <TipCarPTS /> : ""}
      {type === "НДС" ? <TipNDS  />  : ""}
      {type === "Цена" ? <TipPrice  />  : ""}
    </div>
  );
};