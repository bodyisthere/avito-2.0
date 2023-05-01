import { useState, useEffect } from "react";

import { IErrorValidation } from "../types/IErrorValidation";
import { TRegStep } from "../types/TRegStep";

import { useActions } from "../../../app/hooks/redux-hooks";
import { authApi } from "../../../app/store/api/authApi";
import { authValidation } from "../utils/authValidation";

export const useLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberPassword, setRememberPassword] = useState<boolean>(true);
  const [error, setError] = useState<IErrorValidation | null>();

  const [ logSubmit, { data, isLoading }  ] = authApi.useLoginMutation();
  const { successAuth, successAuthWithoutPasswordRemember } = useActions();

  const loginSend = () => {
    logSubmit({email, password})
      .unwrap()
      .then(data => {
        if(rememberPassword) {
          successAuth(data);
        } else {
          successAuthWithoutPasswordRemember(data);
        }
        document.location.reload();
      })
      .catch(err => setError(err));
  };


  return {
    email, setEmail,
    password, setPassword,
    rememberPassword, setRememberPassword,
    error, isLoading,
    loginSend,
  };
};