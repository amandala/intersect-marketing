import React from "react";
import cx from "classnames";
import styles from "./index.module.scss";

type PropsType = {
  header?: React.ReactNode;
  children: React.ReactNode;
  black?: boolean;
};

const StarHeaderPage = ({ header, children, black = true }: PropsType) => {
  return (
    <div className={styles.Wrapper}>
      {header ? <div className={styles.Header}>{header}</div> : null}
      <div className={cx(styles.OpaqueBlack, { [styles.Black]: black })}>
        <div className={styles.ContentWrapper}>
          <div className={styles.Content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default StarHeaderPage;
