//импорт внешних пакетов
import React, { FC, useState } from "react";

//импорт стилей

//импорт типов

//импорт функционала

//импорт компонентов
import { FileUpload } from "../app/components";

interface ITestUI {

}

export const TestUI: FC<ITestUI> = () => {
  const [ photo, setPhoto ] = useState<string[]>([]);

  return (
    <div>
      <FileUpload 
        isMultiple={true}
        maxPhoto={5}
        photo={photo}
        setUploadedPhoto={setPhoto}
      />
    </div>
  );
};