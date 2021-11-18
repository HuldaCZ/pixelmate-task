import React, { useState, useEffect } from "react";

import styles from "./Modal.module.scss";

import IconCancel from "../../public/img/icon-cancel.svg";

import Button from "../Button/Button";
import { ModalPropsI } from "../../Types";

const Modal: React.FC<ModalPropsI> = (props: ModalPropsI) => {
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (validation) {
      e.preventDefault();
      console.log(email);
      props.onClose();
    } else {
      e.preventDefault();
      setError("Prosím vyplňtě email.");
    }
  };

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        props.onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    if (email.length > 0) {
      setError("");
      return setValidation(true);
    } else {
      return setValidation(false);
    }
  }, [email]);

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modal__cancel} onClick={props.onClose}>
          <IconCancel />
        </div>

        <h1 className={styles.modal__title}>Přihlásit se</h1>
        <p className={styles.modal__text}>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas.
        </p>
        <form onSubmit={handleSubmit} className={styles.modal__form}>
          <div className={styles.modal__form__input_border}>
            <input
              className={styles.modal__form__input}
              type="email"
              placeholder="  Váš email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.modal__form__error}>
            <p>{error}</p>
          </div>

          <div>
            <Button type="submit" design="fill" onClick={() => handleSubmit} text="ODESLAT" />
          </div>
        </form>
      </div>
      <div className={styles.backdrop} onClick={props.onClose}></div>
    </>
  );
};

export default Modal;
