import React from "react";
import { Tiny, H1 } from "../../../components/Typography";

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
      </div>
      <div className={styles.Sessions}>
        <H1>Inter.Sect Art & Music Festival 2021</H1>
      </div>
    </div>
  );
};

export default AboveTheFold;
