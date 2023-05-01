import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { userActions } from "../../store/slices/userSlice/userSlice";
import { locationActions } from "../../store/slices/locationSlice/locationSlice";
import { categoryActions } from "../../store/slices/categorySlice/categorySlice";
import { chooseActions } from "../../store/slices/chooseSlice/chooseSlice";
import { errorActions } from "../../store/slices/errorSlice/errorSlice";


const actions = {
  //тут экшены из стора
  //...example
  ...categoryActions,
  ...chooseActions,
  ...userActions,
  ...locationActions,
  ...errorActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};