import { useEffect } from "react";

import { categoriesApi } from "../../../../app/store/api/categoriesApi";
import { useActions, useAppSelector } from "../../../../app/hooks/redux-hooks";
import { useShowError } from "../../../../app/hooks/common-hooks/useShowError";

export const useUploadCategories = () => {
  const { categoryReducer } = useAppSelector(state => state);
  const [ loadCategories, { isLoading, isError} ] = categoriesApi.useLazyGetCategoriesQuery();
  const throwError = useShowError();
  const { setCategories } = useActions();

  useEffect(() => {
    if(categoryReducer.length > 0) return;
    loadCategories()
      .then((payload) => {
        if(payload.data) {
          setCategories(payload.data);
        };
      })
      .catch(err => throwError("Ошибка загрузки категорий", err));
  }, [categoryReducer]); 

  return {
    isLoading,
  };
};