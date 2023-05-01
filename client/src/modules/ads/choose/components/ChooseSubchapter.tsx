//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./Choose.module.scss";

//импорт типов
import { IChooseSubchapter } from "../types/IChooseSubchapter";

//импорт функционала
import { useAppSelector } from "../../../../app/hooks/redux-hooks";
import { Button } from "../../../../ui";

//импорт компонентов


export const ChooseSubchapter: FC<IChooseSubchapter> = ( { activeCategory, activeChapter, activeSubChapter, setActiveSubChapter, setCategory, submitCategory } ) => {
  const { categoryReducer: categories } = useAppSelector(state => state);

  const set = (el: any, index: number) => {
    setActiveSubChapter(index); 
    setCategory(prev => [prev[0], prev[1], prev[2] = el]);
  };

  return (
    <>
      {
        activeCategory !== null && activeCategory >= 0  && activeChapter !== null && activeChapter >= 0
          ?
          categories[activeCategory].chapter[activeChapter].subchapter.length > 0
            ?
            <div className={styles.main}>
              <div className={styles.title}>{categories[activeCategory].chapter[activeChapter].title}</div>
              {
                categories[activeCategory].chapter[activeChapter].subchapter.map((el, index): React.ReactNode => {
                  return (
                    <div 
                      className={`${styles.point} ${activeSubChapter === index && styles["point--active"]}`} 
                      key={index}
                      onClick={() => set(el, index)}
                    >
                      {el}
                    </div>
                  );
                })
              }
            </div>
            :
            <Button onClick={submitCategory}>
              Продолжить<i className="fa-solid fa-arrow-right"></i>
            </Button>
          :
          ""
      } 
    </>
  );
};