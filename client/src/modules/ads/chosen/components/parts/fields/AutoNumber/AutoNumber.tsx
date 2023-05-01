//импорт внешних пакетов
import React, { FC, useState } from "react";

//импорт стилей
import styles from "./AutoNumber.module.scss";
import standart from "../../../../styles/ads.module.scss";

//импорт типов
import { IAutoNumber } from "../../../../types/IFields";

//импорт функционала

//импорт компонентов
import flag from "../../../../../../../app/assets/img/russiaFlag.png";

export const AutoNumber: FC<IAutoNumber> = ({ autoNumber, setFunction, optionKey }) => {
  const [main, setMain] = useState<string>("");
  const [region, setRegion] = useState<string>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMain(e.target.value);
    setFunction(optionKey, {main: e.target.value, region});
  };

  return (
    <div className={standart.item}>
      <div className={standart["item-left"]}>
        <label className={standart.subtitle}>Государственный номер</label>
      </div>
      <div className={standart["item-right"]}>
        <div className={styles.auto}>
          <div className={styles.left}>
            <input 
              type="text" 
              placeholder="о 000 оо" 
              maxLength={6} 
              value={autoNumber?.main || ""}
              onChange={e => onChange(e)}
            />
          </div>
          <div className={styles.right}>
            <input 
              type="text" 
              maxLength={3} 
              value={autoNumber?.region || ""} 
              onChange={e => {
                setRegion(e.target.value);
                setFunction("governmentNumber", {main, region: +e.target.value});
              }}
            />
            <div className={styles.region}>
              <span>RUS</span>
              <img src={flag} alt="Флаг России" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};