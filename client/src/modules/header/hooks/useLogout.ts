import { useActions } from "../../../app/hooks/redux-hooks";
import { authApi } from "../../../app/store/api/authApi";

export const useLogout = () => {
  const { logout: logoutStore } = useActions();
  const [ logoutRequest ] = authApi.useLazyLogoutQuery();

  const logoutHandle = () => {
    logoutRequest(); 
    logoutStore();
    document.location.reload();
  };

  return logoutHandle;
};