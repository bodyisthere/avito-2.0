//импорт внешних пакетов
import React, {FC} from "react";

//импорт стилей
import styles from "./FileUpload.module.scss";

//импорт типов

//импорт функционала
import { baseImg } from "../../constants/api";

//импорт компонентов

interface IFileUploaded {
  uploadedFiles: string[]
  setUploadedPhoto: React.Dispatch<React.SetStateAction<string[]>>
  photo: string[]
}

export const FileUploaded: FC<IFileUploaded> = ({ uploadedFiles, setUploadedPhoto,photo}) => {
  const deleteImg = (e: string) => {
    if(!photo) return;
    const edited = photo.filter((el: any) => el !== e);
    setUploadedPhoto(edited);
  };

  return (
    <div className={styles.uploaded}>
      {
        uploadedFiles.map((el, index) => {
          return (
            <div className={styles.file} key={index}>
              <img src={`${baseImg}${el}`} alt="" className={styles.img} />
              <button className={styles.delete} onClick={() => deleteImg(el)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          );
        })
      }
    </div>
  );
};