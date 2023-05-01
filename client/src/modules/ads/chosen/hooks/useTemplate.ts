import { useState } from "react";
import { IAdsTemplate } from "../types/IAdsTemplate";

export const useTemplate = (generateFunction: () => IAdsTemplate[]) => {
  //генерация шаблона UI компонентов
  const [ template ] = useState<IAdsTemplate[]>(generateFunction());

  return template;
};