import React, { FC, useState } from "react";
import { useActions, useAppSelector } from "../../../app/hooks/redux-hooks";

import { userApi } from "../../../app/store/api/userApi";
import { uploadApi } from "../../../app/store/api/uploadApi";
import { useShowError } from "../../../app/hooks/common-hooks/useShowError";

export const useChangeAvatar = () => {
  const [ isPopOpen, setIsPopOpen ] = useState<boolean>(false);
  //смена аватара
  const [ uploadAvatar, { data } ] = userApi.useAvatarChangeMutation();
  //загрузка изображения
  const [ uploadImg, { isLoading: isImgLoading } ] = uploadApi.useUploadImagesMutation();
  //загруженное изображение
  const [ uploadedImgLink, setUploadedImgLink ] = useState<string>("");

  const { setUserAvatar } = useActions();
  const throwErrorFunction = useShowError();

  const handleImgUpload = async (e: any) => {
    const formData = new FormData();
    const file = e.target.files[0];
    if(!file) throwErrorFunction("Загрузите аватар");
    formData.append("files", file);
    uploadImg(formData)
      .unwrap()
      .then(payload => {
        setUploadedImgLink(payload.data[0]);
        setIsPopOpen(true);
      })
      .catch(err => throwErrorFunction("Ошибка загрузки, попробуйте ещё раз"));
  };

  const handleAvatarUpload = async (avatar: string) => {
    uploadAvatar(avatar)
      .unwrap()
      .then(payload => {
        setUserAvatar(payload.data);
        setIsPopOpen(false);
      })
      .catch(err => throwErrorFunction("Ошибка загрузки, попробуйте ещё раз", err));
  };

  return {
    handleImgUpload, handleAvatarUpload,
    isImgLoading,
    isPopOpen, setIsPopOpen,
    uploadedImgLink,
  };
};