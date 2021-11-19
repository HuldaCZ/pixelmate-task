import React from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
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
          <p className={styles.card__content__header__username}>{user.username || <Skeleton />}</p>
          <p className={styles.card__content__header__name}>{user.name || <Skeleton />}</p>
          <p className={styles.card__content__header__email}>{user.email || <Skeleton />}</p>
        </div>
        <div className={styles.card__content__adress}>
          <div className={styles.card__content__adress__col_i}>
            <IconLocation />
          </div>
          <div className={styles.card__content__adress__col}>
            <p className={styles.card__content__adress__city}>
              {user.address.city || <Skeleton />}
            </p>
            <p className={styles.card__content__adress__street}>
              {user.address.street || <Skeleton />}
            </p>
            <p className={styles.card__content__adress__street}>
              {user.address.zipcode} {user.address.city || <Skeleton />}
            </p>
          </div>
        </div>
        <div className={styles.card__content__web}>{user.website || <Skeleton />}</div>

        <div className={styles.card__content__button}>
          <Link href={`/designers/${user.id}`}>
            <Button text="ZOBRAZIT PROFIL &rarr;" onClick={() => {}} design="outline-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignerCard;
