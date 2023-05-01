//импорт внешних пакетов
import React, { FC, useRef } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from "./HeaderDropMenu.module.scss";

//импорт типов

//импорт функционала
import { useAppSelector } from "../../../../app/hooks/redux-hooks";
import { useClosePop } from "../../../../app/hooks/common-hooks";
import { useLogout } from "../../hooks/useLogout";
import { generateStarRate } from "../../utils/generateStarRate";
import { HeaderExtendedLinks } from "../HeaderLinks/HeaderExtendedLinks";

interface IHeaderDropMenu {
  setShowDropMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderDropMenu: FC<IHeaderDropMenu> = ( { setShowDropMenu } ) => {
  const { rate, reviewsList } = useAppSelector(state => state.userReducer.data.reviews.toMe); 
  const logoutHandle = useLogout();

  const root = useRef<HTMLDivElement | null>(null);
  useClosePop(root, setShowDropMenu);

  return (
    <div className={styles.drop}>
      <div className={styles.content} ref={root}>
        <div className={styles.rate}>
          {
            reviewsList.length
              ?
              <>
                <div className={styles.avg}>{rate}</div>
                <div className={styles.stars}>
                  { generateStarRate(rate, reviewsList) }
                </div>
                <div>{reviewsList.length}</div>
              </>
              :
              <p style={{color: "black"}}>У вас 0 отзывов</p>
          }
        </div>
        <HeaderExtendedLinks setShowDropMenu={setShowDropMenu} />
        <div className={styles.leave} onClick={() => logoutHandle()}>Выйти</div>
      </div>
    </div>
  );
};