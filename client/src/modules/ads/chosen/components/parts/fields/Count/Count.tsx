//импорт внешних пакетов
import React, { FC, useState } from "react";

//импорт стилей
import standart from "../../../styles/ads.module.scss";

//импорт типов
import { IAdsBaseField } from "../../../../types/IAdsBaseField";

//импорт функционала

//импорт компонентов
import { OnOff } from "../../../../../../../ui";
import { AdsInputNumber } from "../../partsOfFields/AdsInputNumber/AdsInputNumber";

export const Count: FC<IAdsBaseField> = ( { setFunction, form } ) => {
  const [isCount, setIsCount] = useState<boolean>(false);

  return (
    <>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Несколько штук в наличии</label>
        </div>
        <div className={standart["item-right"]}>
          <OnOff onChange={() => setIsCount(!isCount)}/>
        </div>
      </div>
      {
        isCount
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Количество</label>
          </div>
          <div className={standart["item-right"]}>
            <AdsInputNumber placeholder="шт" setFunction={setFunction} optionKey="count" value={form.count}/>
            Можно не указывать
          </div>
        </div>
      }
    </>
  );
};