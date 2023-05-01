//импорт внешних пакетов
import React, { FC, useState } from "react";

//импорт стилей

//импорт типов
import { IAdsTemplate } from "../../types/IAdsTemplate";

//импорт функционала
import { useGenTemplate } from "../../hooks/useGenTemplate";

//импорт компонентов
import { ChosenSubmit } from "./ChosenSubmit";
import { useTemplate } from "../../hooks/useTemplate";
import { useForm } from "../../hooks/useForm";

interface IChosenForm {
  generateFunction: () => IAdsTemplate[]
  customForm?: {
    [key : string]: any 
  }
}

export const ChosenForm: FC<IChosenForm> = ( { generateFunction, customForm } ) => {
  const template = useTemplate(generateFunction);
  const { form, setForm } = useForm(template, customForm);
  const [ validationErrors, setValidationErrors ] = useState<string[]>([]);

  const setFunction = (optionKey: string, value: any) => {
    setForm((prev: any) => {
      return {
        ...prev, [optionKey] : value,
      } as typeof form;
    });
  };

  const generateTemplate = useGenTemplate(template, form, setFunction, validationErrors, setForm);

  return (
    template
    &&
    <>
      { generateTemplate() }
      <ChosenSubmit 
        form={form}
        setValidationErrors={setValidationErrors}
        template={template}
      />
    </>
  );
};