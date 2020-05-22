import React from "react";

import styles from "./index.module.scss";

type PropsType = {
  logo: string;
  name: string;
  children: React.ReactNode;
};

const ArtistSpotlightPage = ({ logo, name, children }: PropsType) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <img className={styles.Logo} src={logo} alt={`${name} logo`} />
      </div>
      <div className={styles.ContentWrapper}>
        <div className={styles.Content}>{children}</div>
      </div>
    </div>
  );
};

export default ArtistSpotlightPage;
