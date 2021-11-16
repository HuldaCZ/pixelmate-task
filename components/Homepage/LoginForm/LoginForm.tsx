import React from "react";

import Button from "../../Button/Button";
import styles from "./LoginForm.module.scss";

const LoginForm: React.FC = () => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.loginForm__container}>
        <h2 className={styles.loginForm__heading}>Přihlašte se</h2>
        <form className={styles.loginForm__form}>
          <div className={styles.loginForm__form__group}>
            <label id="email" className={styles.loginForm__form__label}>
              <input type="email" id="email" className={styles.loginForm__form__input} />
              <span className={styles.loginForm__form__span}>Váš email</span>
            </label>
          </div>
          <div className={styles.loginForm__form__group}>
            <label id="password" className={styles.loginForm__form__label}>
              <input type="password" id="password" className={styles.loginForm__form__input} />
              <span className={styles.loginForm__form__span}>Heslo</span>
            </label>
          </div>

          <div className={styles.loginForm__form__group_wb}>
            <label className={styles.checkbox_container}>
              Souhlasím se všeobecnými podmínkami a Zásadou o ochranně osobních údajlů.
              <input className={styles.checkbox_input} type="checkbox" />
              <span className={styles.checkbox_checkmark}></span>
            </label>
          </div>

          <Button design="fill" onClick={() => {}} text="Přihlásit se &rarr;" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
