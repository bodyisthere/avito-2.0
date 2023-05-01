import { errorReducer, errorActions } from "./errorSlice";
import { IError } from "../../../types/IError";

describe("Тест error-reducer", () => {
  const initialError: IError = {
    message: "",
    error: "",
    isOpen: false,
  };
  
  const addedError: IError = {
    error: "Какая - то ошибка",
    isOpen: true,
    message: "Произошла ошибка", 
  };

  test("Добавление ошибки", () => {
    expect(errorReducer(initialError, errorActions.setError(addedError))).toEqual({
      error: "Какая - то ошибка",
      isOpen: true,
      message: "Произошла ошибка", 
    });
  });
  
  test("Удаление ошибки", () => {
    expect(errorReducer(addedError, errorActions.deleteError())).toEqual(initialError);
  });
});