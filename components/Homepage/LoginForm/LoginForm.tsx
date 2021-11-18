import React, { useState, useEffect } from "react";

import Button from "../../Button/Button";
import styles from "./LoginForm.module.scss";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [validation, setValidation] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (validation) {
      e.preventDefault();
      console.log(email, password, checked);
    } else {
      e.preventDefault();
      setError("Prosím vyplňtě všechna pole formuláře.");
    }
  };

  useEffect(() => {
    if (email.length > 0 && password.length > 0 && checked) {
      setError("");
      return setValidation(true);
    } else {
      return setValidation(false);
    }
  }, [email, password, checked]);

  return (
    <div className={styles.loginForm}>
      <div className={styles.loginForm__container}>
        <h2 className={styles.loginForm__heading}>Přihlašte se</h2>
        <form className={styles.loginForm__form} onSubmit={handleSubmit}>
          <div className={styles.loginForm__form__group}>
            <label id="email" className={styles.loginForm__form__label}>
              <input
                type="email"
                id="email"
                className={styles.loginForm__form__input}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span
                className={`${styles.loginForm__form__span} ${
                  email.length > 0 && styles.loginForm__form__span_filled
                }`}
              >
                Váš email
              </span>
            </label>
          </div>
          <div className={styles.loginForm__form__group}>
            <label id="password" className={styles.loginForm__form__label}>
              <input
                type="password"
                id="password"
                className={styles.loginForm__form__input}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className={`${styles.loginForm__form__span} ${
                  password.length > 0 && styles.loginForm__form__span_filled
                }`}
              >
                Heslo
              </span>
            </label>
          </div>

          <div className={styles.loginForm__form__group_wb}>
            <label className={styles.checkbox_container}>
              Souhlasím se všeobecnými podmínkami a Zásadou o ochranně osobních údajlů.
              <input
                className={styles.checkbox_input}
                type="checkbox"
                onChange={() => setChecked(!checked)}
              />
              <span className={styles.checkbox_checkmark}></span>
            </label>
          </div>

          <div className={styles.loginForm__form__group_wb}>
            <label className={styles.loginForm__form__error}>{error}</label>
          </div>

          <Button type="submit" design="fill" onClick={() => {}} text="PŘIHLASIT SE &rarr;" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
