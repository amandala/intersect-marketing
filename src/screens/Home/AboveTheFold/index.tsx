import React from "react";
import { H1, Tiny } from "../../../components/Typography";

import styles from "./index.module.scss";

const AboveTheFold = () => {
  return (
    <div className={styles.AboveTheFold}>
      <div className={styles.DropagandaPresents}>
        <img
          className={styles.Dropaganda}
          alt="Dropaganda Logo"
          src="/dropaganda.png"
        />
        <Tiny>PRESENTS</Tiny>
      </div>
      <img alt="Intersect Logo" className={styles.Mark} src="mark.png" />
      {/* //TODO: update to new logo */}
      <img
        alt="Intersect Wordmark"
        className={styles.WordMark}
        src="type.png"
      />
      <H1>SESSIONS</H1>
    </div>
  );
};

export default AboveTheFold;
