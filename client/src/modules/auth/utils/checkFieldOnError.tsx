import { IErrorValidation } from "../types/IErrorValidation";

export const checkFieldOnError = (errors: IErrorValidation, field: string) => {
  let message: string | null = null;

  if(!errors.data.errors) return;
  errors.data.errors.forEach(el => {
    if(el.param === field) return message = el.msg;
  });

  return (
    <p style={{color: "red", "fontSize": "14px", "marginBottom":"5px"}}>
      {message}
    </p>
  );
};