import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useActions } from "../redux-hooks";

export const useNoAuthGoHome = () => {
  const { isAuth } = useAppSelector(state => state.userReducer);
  const { setAuthPop } = useActions();

  const goTo = useNavigate();

  useEffect(() => {
    if(!isAuth) {
      goTo("/");
      setAuthPop(true);
    }
  }, [ isAuth ]);
};