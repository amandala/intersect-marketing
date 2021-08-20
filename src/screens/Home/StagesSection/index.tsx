import React from "react";
import cx from "classnames";
import BridgeSvg from "./BridgeSvg";
import GalleySvg from "./GalleySvg";
import { P, Tiny, H1 } from "../../../components/Typography";
import styles from "./index.module.scss";

const StagesSection = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <div className={styles.Stages}>
          <img
            className={styles.Image}
            src="/galleyTimes.png"
            alt="Galley stage times"
          />
          <img
            className={styles.Image}
            src="/bridgeTimes.png"
            alt="Bridge stage times"
          />
        </div>
      </div>
    </div>
  );
};

export default StagesSection;
