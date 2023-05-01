import { useState } from "react";
import { useAppSelector } from "../../../../app/hooks/redux-hooks";

import { createForm } from "../utils/createForm";

import { IAdsTemplate } from "../types/IAdsTemplate";

export const useForm = (template: IAdsTemplate[], customForm?: {[key: string]: any}) => {
  const { category: categoryTags } = useAppSelector(state => state.chooseReducer);

  //генерация формы для заполнения UI
  const [ form, setForm ] = useState<any>(createForm(template, categoryTags, customForm));

  return {
    form, setForm,
  };
};