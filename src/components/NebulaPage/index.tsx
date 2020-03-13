import React from "react";
import { H1 } from "../../components/Typography";
import styles from "./index.module.scss";

type PropsType = {
  heading: string;
  children: React.ReactNode;
};

const NebulaPage = ({ heading, children }: PropsType) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.AboveTheFold}>
        <H1 className={styles.Heading}>{heading}</H1>
      </div>
      {children}
    </div>
  );
};

export default NebulaPage;
