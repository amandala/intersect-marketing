import React from "react";
import cx from "classnames";

import styles from "./index.module.scss";

type TypographyType = {
  children: any;
  className?: string;
  small?: boolean;
};

export const H1 = ({ children, className = "" }: TypographyType) => (
  <h1 className={cx(styles.H1, className)}>{children}</h1>
);
export const H2 = ({ children, className = "" }: TypographyType) => (
  <h2 className={cx(styles.H2, className)}>{children}</h2>
);
export const H3 = ({ children, className = "" }: TypographyType) => (
  <h3 className={cx(styles.H3, className)}>{children}</h3>
);
// export const H4 = ({ children, className = "" }: TypographyType) => (
//   <h4 className={cx(styles.H4, className)}>{children}</h4>
// );
// export const H5 = ({ children, className = "" }: TypographyType) => (
//   <h5 className={cx(styles.H5, className)}>{children}</h5>
// );
export const P = ({ children, className = "", small }: TypographyType) => (
  <p className={cx(styles.P, className, { [styles.PSmall]: small })}>
    {children}
  </p>
);
export const Tiny = ({ children, className = "" }: TypographyType) => (
  <p className={cx(styles.Tiny, className)}>{children}</p>
);
