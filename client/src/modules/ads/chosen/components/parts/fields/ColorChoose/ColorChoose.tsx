//импорт внешних пакетов
import { FC } from "react";

//импорт стилей
import styles from "./ColorChoose.module.scss";
import standart from "../../../../styles/ads.module.scss";

//импорт типов
import { IColorChoose } from "../../../../types/IFields";

//импорт функционала
import { color } from "./data/color.data";

//импорт компонентов

export const ColorChoose: FC<IColorChoose> = ( { activeColor, setFunction, validationErrors } ) => {
  return (
    <div className={standart.item}>
      <div className={standart["item-left"]}>
        <label className={standart.subtitle}>Цвет*</label>
      </div>
      <div className={standart["item-right"]}>
        <div className={styles.body}>
          {
            color.map((el, index) => {
              return (
                <button 
                  key={index} 
                  className={`${styles.color} ${el.text === activeColor ? styles["color--active"] : ""}`} 
                  title={el.text} 
                  style={{"background": el.color}} 
                  onClick={() => setFunction("color", el.text)}
                >
                </button>
              );
            })
          }
        </div>     
        {validationErrors.includes("color") && <span className={standart["error-text"]}><br/>Выберите цвет</span>}
      </div>
    </div>
  );
};