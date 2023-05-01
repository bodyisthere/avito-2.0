import { IErrorValidation } from "../types/IErrorValidation";

interface IBody {
  email: string
  name: string
  password: string
  passwordRepeat: string
}

export const authValidation = ( body: IBody ) => {
  let errors: IErrorValidation | null = {
    data: {
      message: "",
      errors: [],
    },
    status: 0,
  };

  if(!body.password) {
    errors.data.message = "Ошибка валидации";
    errors.status = 403;
    errors.data.errors.push(
      {value: "", msg: "Введите пароль", param: "password", location: ""}, 
    );
  }

  if(!body.passwordRepeat) {
    errors.data.message = "Ошибка валидации";
    errors.status = 403;
    errors.data.errors.push(
      {value: "", msg: "Введите повторный пароль", param: "passwordRepeat", location: ""}, 
    );
  }

  if(body.password !== body.passwordRepeat) {
    errors.data.message = "Ошибка валидации";
    errors.status = 403;
    errors.data.errors.push(
      {value: "", msg: "Пароли не совпадают", param: "password", location: ""}, 
      {value: "", msg: "Пароли не совпадают", param: "passwordRepeat", location: ""},
    );
  }

  if(!body.email) {
    errors.data.message = "Ошибка валидации";
    errors.status = 403;
    errors.data.errors.push(
      {value: "", msg: "Введите email", param: "email", location: ""}, 
    );
  }

  if(!body.name) {
    errors.data.message = "Ошибка валидации";
    errors.status = 403;
    errors.data.errors.push(
      {value: "", msg: "Введите имя", param: "name", location: ""}, 
    );
  }

  if(errors.status === 0) {
    errors = null;
  }

  return errors;
};