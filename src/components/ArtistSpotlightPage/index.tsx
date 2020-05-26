import React from "react";

import styles from "./index.module.scss";

type PropsType = {
  header: React.ReactNode;
  children: React.ReactNode;
};

const ArtistSpotlightPage = ({ header, children }: PropsType) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>{header}</div>
      <div className={styles.ContentWrapper}>
        <div className={styles.Content}>{children}</div>
      </div>
    </div>
  );
};

export default ArtistSpotlightPage;
