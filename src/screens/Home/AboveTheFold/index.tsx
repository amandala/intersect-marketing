import React from "react";

import styles from "./index.module.scss";

const AboveTheFold = () => {
  return (
    <div className={styles.AboveTheFold}>
      <div className={styles.Header}>
        <img className={styles.Image} alt="Event Graphic" src="/header.jpg" />
      </div>
    </div>
  );
};

export default AboveTheFold;
