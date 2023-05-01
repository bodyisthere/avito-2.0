//импорт внешних пакетов
import { FC } from "react";

//импорт стилей
import styles from "./FileUpload.module.scss";

//импорт типов

//импорт функционала
import { uploadApi } from "../../store/api/uploadApi";
import { useActions } from "../../hooks/redux-hooks";
import { isValidFiles } from "./utils/isValidFiles";

//импорт компонентов

interface IFilePick {
  isMultiple: boolean
  setUploadedPhoto: React.Dispatch<React.SetStateAction<string[]>>
  maxPhoto: number
}

export const FilePick: FC<IFilePick> = ( { isMultiple, setUploadedPhoto, maxPhoto } ) => {
  const [ uploadImg ] = uploadApi.useUploadImagesMutation();
  const { setError } = useActions();

  const handleImgUpload = async (e: any) => {
    const formData = new FormData();
    const files: FileList = e.target.files;
    isValidFiles(files, maxPhoto, setError);
    for(let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    uploadImg(formData)
      .unwrap()
      .then(data => setUploadedPhoto(data.data))
      .catch(err => console.log(err));
  };

  return (
    <label className={styles.upload} title="Загрузить фото" onChange={(e) => handleImgUpload(e)}>
      <i className="fa-solid fa-camera"></i>
      <input accept="image/*,.png,.jpg,.jpeg" type="file" className={styles["upload--hidden"]} multiple={isMultiple}/>
    </label>
  );
};