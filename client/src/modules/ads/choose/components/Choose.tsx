//импорт внешних пакетов
import React, {FC, useState} from "react";

//импорт стилей
import styles from "./Choose.module.scss";

//импорт типов

//импорт функционала
import { useUploadCategories } from "../hooks/useUploadCategoires";
import { useNoAuthGoHome } from "../../../../app/hooks/app-component-hooks";
import { useAppSelector, useActions } from "../../../../app/hooks/redux-hooks";

//импорт компонентов
import { CircleLoader, Button } from "../../../../ui";
import { ChooseCategory } from "./ChooseCategory";
import { ChooseChapter } from "./ChooseChapter";
import { ChooseSubchapter } from "./ChooseSubchapter";

interface IChoose {

}

export const Choose: FC<IChoose> = () => {
  const { categoryReducer: categories } = useAppSelector(state => state);
  const { isLoading } = useUploadCategories();
  const { setCategoryChoose, setChooseStep } = useActions();

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [activeSubChapter, setActiveSubChapter] = useState<number | null>(null);
  const [category, setCategory] = useState<string[] | []>([]);

  const submitCategory = () => {
    setCategoryChoose(category);
    setChooseStep("chosen");
  };

  useNoAuthGoHome();
  
  return (
    <>
      { isLoading &&  <CircleLoader /> }
      {
        categories.length !== 0
        &&
        <div className={styles.content}>
          <div className={styles.main}>
            <p className={styles.title}>Категория</p>
            <ChooseCategory 
              setActiveCategory={setActiveCategory} 
              setActiveChapter={setActiveChapter} 
              setCategory={setCategory}
              activeCategory={activeCategory} 
            />
          </div>
          <ChooseChapter 
            setActiveChapter={setActiveChapter} 
            setCategory={setCategory} 
            setActiveSubChapter={setActiveSubChapter}
            activeCategory={activeCategory} 
            activeChapter={activeChapter} 
          />
          <ChooseSubchapter 
            setActiveSubChapter={setActiveSubChapter}
            setCategory={setCategory} 
            activeCategory={activeCategory} 
            activeSubChapter={activeSubChapter} 
            activeChapter={activeChapter} 
            submitCategory={submitCategory}
          />
        </div>
      }
      {
        category.length === 3
        &&
        <Button onClick={submitCategory}>
          Продолжить<i className="fa-solid fa-arrow-right"></i>
        </Button>
      }
    </>
  );
};