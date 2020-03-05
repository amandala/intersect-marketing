import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

export const ButtonLink = ({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link to={href} className={styles.Button}>
      {children}
    </Link>
  );
};

export const ButtonLinkExternal = ({
  children,
  href,
  className,
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
      className={styles.Button}
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
