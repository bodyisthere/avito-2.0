//импорт внешних пакетов
import React, { FC } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from "../Auth.module.scss";

//импорт типов
import { TCondition } from "../../types/TCondition";

//импорт функционала
import { useLogin } from "../../hooks/useLogin";
import { checkFieldOnError } from "../../utils/checkFieldOnError";

//импорт компонентов
import { 
  Input, InputPassword, CircleLoader,
  Button,
} from "../../../../ui";

interface IAuthLog {
  setCondition: React.Dispatch<React.SetStateAction<TCondition>>
}

export const AuthLog: FC<IAuthLog> = ( { setCondition } ) => {
  const { 
    email, setEmail,
    password, setPassword,
    rememberPassword, setRememberPassword,
    error, isLoading,
    loginSend,
  } = useLogin();

  return (
    <>
      <p className={styles.title}>
        Логин
      </p>
      {
        isLoading
          ?
          <CircleLoader />
          :
          <div className={styles.form}>
            <span className={`${styles.span} ${error && styles["span--error"]}`}>
              {error && error.data.message}
            </span>
            {error && checkFieldOnError(error, "name")}
            <Input 
              tabIndex={1}
              placeholder="Почта"
              setValue={setEmail}
              value={email}
              style={{"marginBottom":"5px"}}
            />
            {error && checkFieldOnError(error, "email")}
            <InputPassword 
              tabIndex={2}
              placeholder="Пароль"
              value={password}
              setValue={setPassword}
              style={{"marginBottom":"5px"}}
            />
            {error && checkFieldOnError(error, "password")}
            <div className={styles.passwordRemember}>
              <Button tabIndex={3} onClick={loginSend}>Войти</Button>
              <label onChange={() => setRememberPassword(!rememberPassword)} >
                Запомнить пароль
                <input type="checkbox" defaultChecked={rememberPassword}/>
              </label>
            </div>
            <div className={styles.reg}>
              или <button onClick={() => setCondition("reg")}>регистрация</button>
              или <button onClick={() => setCondition("rec")}>забыли пароль?</button>
            </div>
            <div className={styles.caution}>
              При регистрации и входе вы соглашаетесь с{" "}
              <Link to="">условиями использования Авито</Link> и{" "}
              <Link to="">политикой обработки данных</Link>
            </div>
          </div>
      }
    </>
  );
};