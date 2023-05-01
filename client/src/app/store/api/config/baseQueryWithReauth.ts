import type {BaseQueryFn, FetchArgs, FetchBaseQueryError} from "@reduxjs/toolkit/query";

import { IUser } from "../../../types/IUser";

import { baseQuery } from "./baseQuery";
import { userActions } from "../../slices/userSlice/userSlice";

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    if (refreshResult.data) {
      api.dispatch(userActions.successAuth(refreshResult.data as IUser));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(userActions.logout());
    }
  }
  return result;
};