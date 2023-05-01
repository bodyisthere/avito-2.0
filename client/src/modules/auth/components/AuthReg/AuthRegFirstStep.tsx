//импорт внешних пакетов
import React, { FC } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from "../Auth.module.scss";

//импорт типов
import { TRegStep } from "../../types/TRegStep";
import { TCondition } from "../../types/TCondition";

//импорт функционала
import { useRegistration } from "../../hooks/useRegistration";
import { checkFieldOnError } from "../../utils/checkFieldOnError";

//импорт компонентов
import { 
  Input, InputPassword, CircleLoader,
  Button,
} from "../../../../ui";

interface IAuthRegFirstStep {
  setCondition: React.Dispatch<React.SetStateAction<TCondition>>
  setStep?: React.Dispatch<React.SetStateAction<TRegStep>>
}

export const AuthRegFirstStep: FC<IAuthRegFirstStep> = ( { setCondition, setStep } ) => {
  const { 
    name, setName,
    email, setEmail,
    password, setPassword,
    passwordRepeat, setPasswordRepeat,
    rememberPassword, setRememberPassword,
    error, isLoading, 
    registrationSend,
  } = useRegistration(setStep);

  return (
    <>
      <p className={styles.title}>
        Регистрация
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
            <Input 
              tabIndex={1}
              placeholder="Имя и фамилия"
              setValue={setName}
              value={name}
              style={{"marginBottom":"5px"}}
            />
            {error && checkFieldOnError(error, "name")}
            <Input 
              tabIndex={2}
              placeholder="Почта"
              setValue={setEmail}
              value={email}
              style={{"marginBottom":"5px"}}
            />
            {error && checkFieldOnError(error, "email")}
            <InputPassword 
              tabIndex={3}
              placeholder="Пароль"
              value={password}
              setValue={setPassword}
              style={{"marginBottom":"5px"}}
            />
            {error && checkFieldOnError(error, "password")}
            <InputPassword 
              placeholder="Повторите пароль"
              tabIndex={4}
              value={passwordRepeat}
              setValue={setPasswordRepeat}
              style={{"marginBottom":"5px"}}
            />
            {error && checkFieldOnError(error, "passwordRepeat")}
            <div className={styles.passwordRemember}>
              <Button tabIndex={5} onClick={registrationSend}>Зарегистрироваться</Button>
              <label onChange={() => setRememberPassword(!rememberPassword)}>
                Запомнить пароль
                <input type="checkbox" defaultChecked={rememberPassword}/>
              </label>
            </div>
            <div className={styles.reg}>
              или <button onClick={() => setCondition("log")}>войти</button>
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