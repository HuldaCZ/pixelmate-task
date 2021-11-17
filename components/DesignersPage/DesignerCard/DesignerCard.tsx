import React from "react";
import Button from "../../Button/Button";

import IconLocation from "../../../public/img/icon-location.svg";

import styles from "./DesignerCard.module.scss";
import { DesignerCardI } from "../../../Types";

const DesignerCard = (props: DesignerCardI) => {
  const { user } = props;
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__content__header}>
          <p className={styles.card__content__header__username}>{user.username}</p>
          <p className={styles.card__content__header__name}>{user.name}</p>
          <p className={styles.card__content__header__email}>{user.email}</p>
        </div>
        <div className={styles.card__content__adress}>
          <div className={styles.card__content__adress__col_i}>
            <IconLocation />
          </div>
          <div className={styles.card__content__adress__col}>
            <p className={styles.card__content__adress__city}>{user.address.city}</p>
            <p className={styles.card__content__adress__street}>{user.address.street}</p>
            <p className={styles.card__content__adress__street}>
              {user.address.zipCode} {user.address.city}
            </p>
          </div>
        </div>
        <div className={styles.card__content__web}>{user.email}</div>

        <div className={styles.card__content__button}>
          <Button text="View Profile" onClick={() => {}} design="outline-primary" />
        </div>
      </div>
    </div>
  );
};

export default DesignerCard;
