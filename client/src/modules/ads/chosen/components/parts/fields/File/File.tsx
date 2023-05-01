//импорт внешних пакетов
import { FC, useState, useEffect } from "react";

//импорт стилей
import standart from "../../../../styles/ads.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов
import { FileUpload } from "../../../../../../../app/components";

interface IFile {
  value: string[]
  setFunction: (key: string, value: any) => void
  validationErrors: string[]
}

export const File: FC<IFile> = ( { value, validationErrors, setFunction } ) => {
  const [uploadedPhoto, setUploadedPhoto] = useState<string[]>([]);

  useEffect(() => {
    setFunction("photo", uploadedPhoto);
  }, [uploadedPhoto]);

  return (
    <div className={standart.item}>
      <div className={standart["item-left"]}>
        <label className={standart.subtitle}>Фотографии<br/>Не более 10*</label>
      </div>
      <div className={standart["item-right"]}>
        <FileUpload isMultiple={true} photo={value} setUploadedPhoto={setUploadedPhoto} maxPhoto={10}/>
        {validationErrors.includes("photo") && <span className={standart["error-text"]}><br/>Загрузите хотя бы одну фотографию</span>}
      </div>
    </div>
  );
};