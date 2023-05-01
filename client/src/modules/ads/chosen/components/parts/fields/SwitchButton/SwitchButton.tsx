//импорт внешних пакетов
import React, { FC, useEffect, useState } from "react";

//импорт стилей
import standart from "../../../../styles/ads.module.scss";

//импорт типов
import { ISwitchButton } from "../../../../types/IFields";

//импорт функционала

//импорт компонентов
import { OnOff } from "../../../../../../../ui";

export const SwitchButton: FC<ISwitchButton> = ({ fieldTitle, optionKey, validate, setFunction }) => {
  const [value, setValue] = useState<boolean>(false);

  useEffect(() => setFunction(optionKey, value), [value]);

  return (
    <div className={standart.item}>
      <div className={standart["item-left"]}>
        <label className={standart.subtitle}>{fieldTitle}</label>
      </div>
      <div className={standart["item-right"]}>
        <OnOff onChange={() => setValue(!value)}/>
        {
          validate 
          && 
          validate.validationErrors.includes(optionKey) 
          && 
          <span className={standart["error-text"]}>{validate?.validationMessage}</span>
        }
      </div>
    </div>
  );
};