import { useState, useEffect } from "react";

import { IErrorValidation } from "../types/IErrorValidation";
import { TRegStep } from "../types/TRegStep";

import { useActions } from "../../../app/hooks/redux-hooks";
import { authApi } from "../../../app/store/api/authApi";
import { authValidation } from "../utils/authValidation";

export const useRegistration = (setStep: React.Dispatch<React.SetStateAction<TRegStep>> | undefined) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [rememberPassword, setRememberPassword] = useState<boolean>(true);
  const [error, setError] = useState<IErrorValidation | null>();

  const [ regSubmit, { data, isLoading }  ] = authApi.useRegistrationMutation();
  const { successAuth, successAuthWithoutPasswordRemember } = useActions();

  const registrationSend = () => {
    const validationResult = authValidation({name, email, password, passwordRepeat});
    if(validationResult) {
      return setError(validationResult);
    } else {
      setError(null);
    }

    regSubmit({email, name, password})
      .unwrap()
      .then(data => {
        if(!setStep) return;
        setStep("send-activation-link");
        if(rememberPassword) {
          successAuth(data);
        } else {
          successAuthWithoutPasswordRemember(data);
        }
      })
      .catch(err => setError(err));
  };

  return {
    name, setName,
    email, setEmail,
    password, setPassword,
    passwordRepeat, setPasswordRepeat,
    rememberPassword, setRememberPassword,
    error, isLoading,
    registrationSend,
  };
};