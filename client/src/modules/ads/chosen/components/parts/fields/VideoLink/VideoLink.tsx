//импорт внешних пакетов
import { FC } from "react";

//импорт стилей
import styles from "./VideoLink.module.scss";
import standart from "../../../../styles/ads.module.scss";

//импорт типов
import { IVideoLink } from "../../../../types/IFields";

//импорт функционала

//импорт компонентов

export const VideoLink: FC<IVideoLink> = ( { value, optionKey, setFunction} ) => {
  return (
    <div className={standart.item}>
      <div className={standart["item-left"]}>
        <label className={standart.subtitle}>Видео(youtube)</label>
      </div>
      <div className={standart["item-right"]}>
        <input 
          type="text"
          className={styles.input} 
          value={value ? value : ""} 
          placeholder="Ссылка на видео" 
          onChange={(e) => setFunction(optionKey, e.target.value)}
        />
        {
          value
          &&
          <div className={styles.info}>
            <div className={styles.left}>
              <img src={"https://img.youtube.com/vi/JMJXvsCLu6s/3.jpg"} alt="" />
            </div>
            <div className={styles.right}>
              <div className={styles.link}>тут будет ссылка</div>
              <button className={styles.delete} onClick={() => setFunction(optionKey, null)}>Удалить</button>
            </div>
          </div>
        }
      </div>
    </div>
  );
};