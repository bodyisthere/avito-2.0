//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./Choose.module.scss";

//импорт типов
import { ICategory } from "../../../../app/types/ICategory";
import { IChooseCategory } from "../types/IChooseCategory";

//импорт функционала
import { useAppSelector } from "../../../../app/hooks/redux-hooks";

//импорт компонентов

export const ChooseCategory: FC<IChooseCategory> = ( { setActiveCategory, setActiveChapter, setCategory, activeCategory } ) => {
  const { categoryReducer: categories } = useAppSelector(state => state);

  const set = (el: ICategory, index: number) => {
    setActiveCategory(index); 
    setActiveChapter(null); 
    setCategory([el.category]);
  };

  return (
    <>
      {
        categories.map((el, index) => {
          return (
            <div 
              key={index}
              className={`${styles.point} ${activeCategory === index && styles["point--active"] }`}
              onClick={() => set(el, index)}
            >
              {el.category}
            </div>
          );
        })
      }
    </>
  );
};