import { MemoryRouter } from "react-router-dom";
import { Router } from "../../router";

export const renderWithRouter = (component: any, initialRoute: string = "/") => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <Router />
      { component }
    </MemoryRouter>
  );
};