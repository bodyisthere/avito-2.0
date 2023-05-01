//импорт внешних пакетов
import { FC, ButtonHTMLAttributes} from "react";

//импорт стилей
import styles from "./Button.module.scss";

//импорт типов

//импорт функционала

//импорт компонентов

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  children?: any;
  background?: "lightblue" | "gray" | "transparent" | "pink" | "lightpink" | "green";
  size?: "small" | "medium" | "big";
  className?: string;
}

export const Button: FC<IButton> = ({ children, background = "lightblue", size = "big", className, ...props }) => {
  
  const classConfigure = () => {
    const rootClasses: string[] = [styles.button];
    switch(background) {
    case "gray":
      rootClasses.push(styles.gray);
      break;
    case "lightblue":
      rootClasses.push(styles.lightblue);
      break;
    case "transparent":
      rootClasses.push(styles.transparent);
      break;
    case "pink":
      rootClasses.push(styles.pink);
      break;
    case "lightpink":
      rootClasses.push(styles.lightpink);
      break;
    case "green":
      rootClasses.push(styles.green);
      break;
    }
    switch(size) {
    case "small":
      rootClasses.push(styles.small);
      break;
    case "medium":
      rootClasses.push(styles.medium);
      break;
    case "big":
      rootClasses.push(styles.big);
      break;
    }
    return rootClasses;
  };

  return (
    <button className={`${classConfigure().join(" ")} ${className ? className : ""}`} {...props} >
      {children}
    </button>
  );
};
