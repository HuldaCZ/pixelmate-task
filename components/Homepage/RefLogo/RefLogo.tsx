import React from "react";
import Image from "next/image";

import styles from "./RefLogo.module.scss";

const RefLogo: React.FC = () => {
  return (
    <div className={styles.logos_container}>
      <div className={styles.logo_container}>
        <Image src="/img/loga-header-ct@2x.png" width={147} height={22} />
      </div>
      <div className={styles.logo_container}>
        <Image src="/img/loga-header-deloitte@2x.png" width={105} height={20} />
      </div>
      <div className={styles.logo_container}>
        <Image src="/img/loga-header-bosch@2x.png" width={103} height={23} />
      </div>
      <div className={styles.logo_container}>
        <Image src="/img/loga-header-nm@2x.png" width={112} height={44} />
      </div>
      <div className={styles.logo_container}>
        <Image src="/img/loga-header-cemix@2x.png" width={91} height={21} />
      </div>
    </div>
  );
};

export default RefLogo;
