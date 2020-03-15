import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

export const InternalLink = ({ href, children, className = "", ...rest }) => {
  return (
    <Link className={cx(styles.Link, className)} to={href} {...rest}>
      {children}
    </Link>
  );
};

export const ExternalLink = ({ href, children, className = "", ...rest }) => {
  return (
    <a
      className={cx(styles.Link, className)}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
};
