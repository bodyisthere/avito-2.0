//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import standart from "../../../../styles/ads.module.scss";

import { IAdditional } from "../../../../types/IFields";

//импорт функционала

//импорт компонентов
import { AdditionalItem } from "./parts/AdditionalItem";

export const Additional: FC<IAdditional> = ( { setForm, data } ) => {
  return (
    <>
      <div className={standart.item}>
        <div className={standart.additional}>
          {
            data.map((el, index) => {
              return (
                <AdditionalItem
                  key={index}
                  content={el.content}
                  keyField={el.keyField}
                  setForm={setForm}
                  title={el.title}
                  checkboxData={el.checkboxData ? el.checkboxData : []}
                  selectData={el.selectData ? el.selectData : []}
                />
              );
            })
          }
        </div>
      </div>
    </>
  );
};