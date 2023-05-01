//импорт внешних пакетов
import React, { FC } from "react";

//импорт стилей
import styles from "./SideBar.module.scss";

//импорт типов

//импорт функционала
import { useAppSelector } from "../../../app/hooks/redux-hooks";
import { useChangeAvatar } from "../hooks/useChangeAvatar";
import { baseImg } from "../../../app/constants/api";

//импорт компонентов
import { CircleLoader, PopUp,Button } from "../../../ui";

interface ISideBarAvatar {

}

export const SideBarAvatar: FC<ISideBarAvatar> = () => {
  const { avatar, name } = useAppSelector(state => state.userReducer.data);
  const { 
    uploadedImgLink, handleAvatarUpload, handleImgUpload, 
    isImgLoading, isPopOpen, setIsPopOpen,
  } = useChangeAvatar();

  return (
    <>
      <div className={styles.avatar}>
        {
          isPopOpen
          &&
          <PopUp closeFunction={setIsPopOpen}>
            <p className={styles.name}>Загруженное изображение</p>
            <div className={styles.preview}>
              <img src={`${baseImg}${uploadedImgLink}`} alt="" />
            </div>
            <Button onClick={() => handleAvatarUpload(uploadedImgLink)}>Изменить аватар</Button>
          </PopUp>
        }
        {
          isImgLoading
            ?
            <CircleLoader />
            :
            <img 
              src={`${baseImg}${avatar}`}
              alt={name}
            />
        }
        <label>
          <i className="fa-solid fa-camera">
            <input 
              type="file"
              onChange={(e: any) => handleImgUpload(e)}
              accept="image/*,.png,.jpg,.jpeg"
              multiple={false}
            />
          </i>
        </label>
      </div>
      <p className={styles.name}>
        { name }
      </p>
    </>
  );
};