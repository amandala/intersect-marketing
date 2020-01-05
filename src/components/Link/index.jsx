import React from "react";

import styles from "./index.module.scss";

const Link = ({ href = "", children, ...rest }) => {
  return (
    <a className={styles.Link} href={href} {...rest}>
      {children}
    </a>
  );
};

export default Link;
