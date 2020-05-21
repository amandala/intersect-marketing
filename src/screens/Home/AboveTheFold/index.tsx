import React from "react";
import { H1, H2, H3 } from "../../../components/Typography";
import { ButtonLinkExternal } from "../../../components/Button";

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
        <H1>SESSIONS</H1>
        <H2>PART 1 - JUNE 6, 2020</H2>
        <H2>Join our private live stream party from Joussard, AB featuring:</H2>
      </div>
    </div>
  );
};

export default AboveTheFold;
