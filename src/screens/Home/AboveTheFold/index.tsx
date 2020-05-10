import React from "react";
import { H1, H2, H3 } from "../../../components/Typography";

import styles from "./index.module.scss";

const AboveTheFold = () => {
  return (
    <div className={styles.AboveTheFold}>
      <img alt="Intersect Logo" className={styles.Mark} src="mark.png" />
      <img
        alt="Intersect Wordmark"
        className={styles.WordMark}
        src="type.png"
      />
      <div className={styles.DetailsWrapper}>
        <H1>Art and Music Festival</H1>
        <H2>Postponed until 2021</H2>
        <H3>High Prairie, Alberta</H3>
      </div>
    </div>
  );
};

export default AboveTheFold;
