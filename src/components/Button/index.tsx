import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

export const ButtonLink = ({
  children,
  className = "",
  href
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  return (
    <Link to={href} className={cx(styles.Button, className)}>
      {children}
    </Link>
  );
};

export const ButtonLinkExternal = ({
  children,
  href,
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className={cx(styles.Button, className)}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};

export const Button = ({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button onClick={() => onClick()} className={styles.Button}>
      {children}
    </button>
  );
};
