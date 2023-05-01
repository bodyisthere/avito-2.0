//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import standart from "../../../../styles/ads.module.scss";

//импорт типов
import { IAdsValidationError } from "../../../../types/IAdsBaseField";

//импорт функционала

//импорт компонентов
import { Textarea } from "../../../../../../../ui";

export const Description: FC<IAdsValidationError> = ( { form, setFunction, validationErrors } ) => {
  return (
    <div className={standart.item}>
      <div className={standart["item-left"]}>
        <label className={standart.subtitle}>Описание*</label>
      </div>
      <div className={standart["item-right"]}>
        <Textarea 
          defaultValue={form.description}
          onChange={e => setFunction("description", e.target.value)}
        />
        <br/>
        {validationErrors.includes("description") && <span className={standart["error-text"]}>Укажите описание</span>}
      </div>
    </div>
  );
};