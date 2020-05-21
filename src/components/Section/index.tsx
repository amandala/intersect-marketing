import React from "react";

import styles from "./index.module.scss";

const Section = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.Section}>
    <div className={styles.Content}>{children}</div>
  </div>
);

export default Section;
