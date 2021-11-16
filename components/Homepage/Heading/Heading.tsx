import React from "react";

import Button from "../../Button/Button";

import styles from "./Heading.module.scss";

const Heading: React.FC = () => {
  return (
    <div className={styles.heading__container}>
      <h1 className={styles.heading__title}>Specializujeme se na vývoj produktů</h1>
      <h2 className={styles.heading__subtitle}>
        Ty nejlepší firmy na trhu už CRM systémy nějakou tu dobu používají, ale není výjimkou, že se
        trápí zbytečně.
      </h2>

      <div className={styles.heading__button_wrapper}>
        <Button text="Kontaktujte nás &rarr;" design="fill" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Heading;
