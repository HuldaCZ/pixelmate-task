import React from "react";
import { ButtonPropsI } from "../../Types";

import styles from "./Button.module.scss";

const Button: React.FC<ButtonPropsI> = (props: ButtonPropsI) => {
  return (
    <div className={props.design === "fill" ? styles.btn__fill : styles.btn__outline}>
      {props.text}
    </div>
  );
};

export default Button;
