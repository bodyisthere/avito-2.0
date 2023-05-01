import { useEffect } from "react";

import { authApi } from "../../store/api/authApi";
import { useActions } from "../redux-hooks";
import { useShowError } from "../common-hooks/useShowError";

export const useCheckAuth = () => {
  const { successAuth } = useActions();
  const throwErrorFunction = useShowError();

  const [ authCheck, { isLoading } ] = authApi.useLazyCheckAuthQuery();

  useEffect(() => {
    if(localStorage.getItem("token")) {
      authCheck()
        .unwrap()
        .then(payload => successAuth(payload))
        .catch(err => throwErrorFunction("Прошло много времени с последней авторизации", err));
    }
  }, []);

  return isLoading;
  
};
