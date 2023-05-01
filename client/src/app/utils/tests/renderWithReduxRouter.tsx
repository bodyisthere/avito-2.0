import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { setupStore } from "../../store/store";

import { Router } from "../../router";


export const renderWithReduxRouter = (component: JSX.Element, initialRoute: string = "/") => {
  const store = setupStore();

  return (
    <Provider store={store} >
      <MemoryRouter initialEntries={[initialRoute]}>
        <Router />
        { component }
      </MemoryRouter>
    </Provider>
  );
};