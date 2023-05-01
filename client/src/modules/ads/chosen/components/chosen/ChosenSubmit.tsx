//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей

//импорт типов
import { IAdsTemplate } from "../../types/IAdsTemplate";

//импорт функционала
import { adsApi } from "../../../../../app/store/api/adsApi";
import { useAppSelector, useActions } from "../../../../../app/hooks/redux-hooks";
import { validationCreate } from "../../utils/validation";
import { filterAdditional } from "../../utils/filterAdditional";
import { filterCarBody } from "../../utils/filterCarBody";

//импорт компонентов
import { Button } from "../../../../../ui";

interface IChosenSubmit {
  template: IAdsTemplate[]
  form: any
  setValidationErrors: React.Dispatch<React.SetStateAction<string[]>>
}

export const ChosenSubmit: FC<IChosenSubmit> = ( { template, form, setValidationErrors }) => {
  const [ uploadAds, { data }] = adsApi.useNewPostMutation();
  const { category: categoryTags } = useAppSelector(state => state.chooseReducer);
  const { setChooseStep, setNewAdsForm } = useActions();

  const submitForm = () => {
    const body: any = {};

    for (const key in form) {
      body[key] = form[key];
    }

    if("additional" in body) {
      body.additional = filterAdditional(form.additional);
    }

    if("carBody" in body) {
      body.carBody = filterCarBody(form.carBody);
    }

    const validationResult = validationCreate(template, form);
    setValidationErrors(validationResult);
    if(validationResult.length === 0) {
      setNewAdsForm(body);
      setChooseStep("payment");
    };
    // if(validationResult.length === 0) return uploadAds(form);
  };

  return (
    <div>
      <Button onClick={submitForm}>Отправить</Button>
    </div>
  );
};