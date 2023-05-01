import { Provider } from "react-redux";
import { setupStore } from "../../store/store";

export const renderWithRedux = (component: any) => {
  const store = setupStore();

  return (
    <Provider store={store} >
      { component }
    </Provider>
  );
};