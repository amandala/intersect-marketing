import React from "react";
import { H1, H4 } from "../../../components/Typography";

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
        <img
          className={styles.InterSect}
          alt="Dropaganda Logo"
          src="/type.png"
        />
        <H1 className={styles.Heading}>Art & Music Festival</H1>
        <H4>August 20 - 22 2021</H4>
      </div>
    </div>
  );
};

export default AboveTheFold;
