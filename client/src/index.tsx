//импорт внешних пакетов
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

//импорт стилей
import "./app/styles/index.scss";

//импорт типов

//импорт функционала
import { setupStore } from "./app/store/store";

//импорт компонентов
import { App } from "./app/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={setupStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

