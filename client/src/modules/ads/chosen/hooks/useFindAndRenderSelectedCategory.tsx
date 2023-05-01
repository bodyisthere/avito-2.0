import { ChosenForm } from "../components/chosen/ChosenForm";

import { useAppSelector } from "../../../../app/hooks/redux-hooks";
import { categories } from "../data/categoriesInfo.data";

export const useFindAndRenderSelectedCategory = () => {

  const { category: chosenCategory } = useAppSelector(state => state.chooseReducer)

  const findAndRenderSelectedCategory = () => {
    let isFind: boolean = false;
    let element: React.ReactElement | null = null; 
    let i = 0;
    while(!isFind && i < categories.length) {
      const isMatch = JSON.stringify(categories[i].key) === JSON.stringify(chosenCategory);
      if(isMatch) {
        isFind = true;
        return element = (
          <ChosenForm 
            generateFunction={categories[i].generateFunction} 
            customForm={categories[i].customForm}
          />
        );
      } else {
        i += 1;
      };
    }
    return element;
  };

  return findAndRenderSelectedCategory;
};