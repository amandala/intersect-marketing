import React from "react";
import { Tiny } from "../../../components/Typography";

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
      <div className={styles.Sessions}>
        <img
          alt="Inter.Sessions Logo"
          className={styles.WordMark}
          src="/sessions/type-white.png"
        />
      </div>
    </div>
  );
};

export default AboveTheFold;
