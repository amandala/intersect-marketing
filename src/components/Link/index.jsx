import React from "react";
import { Link as ReactLink } from "react-router-dom";

import styles from "./index.module.scss";

const Link = ({ href = "", children, ...rest }) => {
  return (
    <ReactLink className={styles.Link} to={href} {...rest}>
      {children}
    </ReactLink>
  );
};

export default Link;

export const ExternalLink = ({ href = "", children, ...rest }) => {
  return (
    <a className={styles.Link} target="_blank" to={href} {...rest}>
      {children}
    </a>
  );
};
