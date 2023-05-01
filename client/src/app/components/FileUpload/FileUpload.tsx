//импорт внешних пакетов
import React, { FC, useEffect } from "react";

//импорт стилей

//импорт типов

//импорт функционала

//импорт компонентов
import { FilePick } from "./FilePick";
import { FileUploaded } from "./FileUploaded";

interface IFileUpload {
  maxPhoto: number
  isMultiple: boolean
  photo: string[]
  setUploadedPhoto: React.Dispatch<React.SetStateAction<string[]>>
}

export const FileUpload: FC<IFileUpload> = ( { isMultiple, photo, setUploadedPhoto, maxPhoto } ) => {
  return (
    <div>
      {
        Array.isArray(photo) && photo.length > 0 
          ?
          <FileUploaded 
            uploadedFiles={photo ? photo : []} 
            setUploadedPhoto={setUploadedPhoto}
            photo={photo}
          />
          :
          <FilePick 
            isMultiple={isMultiple} 
            setUploadedPhoto={setUploadedPhoto}
            maxPhoto={maxPhoto}
          />
      }     
    </div>
  );
};