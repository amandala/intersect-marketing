import React from "react";

import styles from "./index.module.scss";

const BlackDiv = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.BlackDiv}>
    <div className={styles.Content}>{children}</div>
  </div>
);

export default BlackDiv;
