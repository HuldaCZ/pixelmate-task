import React from "react";
import { ButtonPropsI } from "../../Types";

import styles from "./Button.module.scss";

const Button: React.FC<ButtonPropsI> = (props: ButtonPropsI) => {
  let style = "";

  switch (props.design) {
    case "fill":
      style = styles.btn__fill;
      break;
    case "outline-light":
      style = styles.btn__outline_light;
      break;
    case "outline-dark":
      style = styles.btn__outline_dark;
      break;
    case "outline-primary":
      style = styles.btn__outline_primary;
      break;

    default:
      style = styles.btn__fill;
  }

  return (
    <button type={props.type} className={style} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
