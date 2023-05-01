//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./Choose.module.scss";

//импорт типов
import { IChooseChapter } from "../types/IChooseChapter";

//импорт функционала
import { useAppSelector } from "../../../../app/hooks/redux-hooks";

//импорт компонентов

export const ChooseChapter: FC<IChooseChapter> = ( { activeCategory, activeChapter, setActiveChapter, setCategory, setActiveSubChapter }) => {
  const { categoryReducer: categories } = useAppSelector(state => state);

  const set = (el: {title: string;subchapter: string[]}, index: number) => {
    setActiveChapter(index);
    setActiveSubChapter(null); 
    setCategory(prev => [prev[0], prev[1] = el.title]);
  };

  return (
    <>
      {
        activeCategory !== null && activeCategory >= 0
        &&
        <div className={styles.main}>
          <div className={styles.title}>{categories[activeCategory].category}</div>
          {
            categories[activeCategory].chapter.map((el, index): React.ReactNode => {
              return (
                <div 
                  className={`${styles.point} ${activeChapter === index && styles["point--active"]}`} 
                  key={index}
                  onClick={() => set(el, index)}
                >
                  {el.title}
                </div>
              );
            })}
        </div>
      } 
    </>
  );
};