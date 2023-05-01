//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import standart from "../../../../styles/ads.module.scss";

//импорт типов
import { IAdsBaseField } from "../../../../types/IAdsBaseField";

//импорт функционала

//импорт компонентов
import { CarConditionWImg } from "./components/CarConditionWImg";

export const CarBody: FC<IAdsBaseField> = ( { form, setFunction } ) => {
  return (
    <>
      <div className={standart.text}>Укажите, что было повреждено или окрашено</div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Тип повреждения</label>
        </div>
        <div className={standart["item-right"]}>
          <CarConditionWImg setOption={setFunction} optionKey={"carBody"} />
        </div>
      </div>
    </>
  );
};