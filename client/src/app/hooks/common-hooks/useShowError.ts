import { useActions } from "../redux-hooks/useActions";

import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

export const useShowError = (timeToClose: number = 5000) => {
  const { setError, deleteError } = useActions();
  const throwErrorFunction = (message: string, error: FetchBaseQueryError | SerializedError | null = null) => {
    setError({message, error});
    setTimeout(() => deleteError(), timeToClose);
  };
  
  return throwErrorFunction;
};