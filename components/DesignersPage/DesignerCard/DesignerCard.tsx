import React from "react";
import Button from "../../Button/Button";

import IconLocation from "../../../public/img/icon-location.svg";

import styles from "./DesignerCard.module.scss";

const DesignerCard = (props: any) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__content__header}>
          <p className={styles.card__content__header__userId}>r.barrett99</p>
          <p className={styles.card__content__header__name}>Richard Barrett</p>
          <p className={styles.card__content__header__email}>r.barrett99@email.com</p>
        </div>
        <div className={styles.card__content__adress}>
          <div className={styles.card__content__adress__col_i}>
            <IconLocation />
          </div>
          <div className={styles.card__content__adress__col}>
            <p className={styles.card__content__adress__city}>Praha</p>
            <p className={styles.card__content__adress__street}>Na Lysinkách 443/57</p>
            <p className={styles.card__content__adress__street}>147 00 Praha - Hodovičky</p>
          </div>
        </div>
        <div className={styles.card__content__web}>www.petrhuli.cz</div>

        <div className={styles.card__content__button}>
          <Button text="View Profile" onClick={() => {}} design="outline-primary" />
        </div>
      </div>
    </div>
  );
};

export default DesignerCard;
