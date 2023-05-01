import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export const isValidFiles = (files: FileList, maxPhoto: number, setError: ActionCreatorWithPayload<{
  message: string;
  error: any;
}, "error-slice/setError">) => {
  if(files.length > maxPhoto || files.length === 0) {
    setError({message: `Максимальное число файлов - ${maxPhoto}`, error: ""});
    throw new Error(`Максимальное число файлов - ${maxPhoto}`);
  }
  for(let i = 0; i < files.length; i++) {
    if(files[i].type !== "image/jpeg" && files[i].type !== "image/png"  && files[i].type !== "image/jpg") {
      setError({message: "Загрузите файлы jpeg, png или jpg", error: ""});
      throw new Error("Загрузите файлы jpeg, png или jpg");
    }
    return;
  }
};