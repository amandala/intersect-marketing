import React from "react";
import WordmarkSvg from "./WordmarkSvg";
import LogoSvg from "./LogoSvg";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.Layout}>
      <LogoSvg />
      <WordmarkSvg />
      <h3 className={styles.Subheading}>Music and Arts Festival</h3>
      <h2 className={styles.Details}>August 21 - 23 2020</h2>
      <h2 className={styles.Details}>High Prarie, Alberta</h2>
      <div className={styles.Stages}>
        <div className={styles.Stage}>
          <h1 className={styles.HeadingMedium}>Core</h1>
          <p className={styles.Text}>Heavy Electronic</p>
        </div>
        <div className={styles.Stage}>
          <h1 className={styles.HeadingMedium}>Bridge</h1>
          <p className={styles.Text}>Genre Fustion</p>
        </div>
        <div className={styles.Stage}>
          <h1 className={styles.HeadingMedium}>Galley</h1>
          <p className={styles.Text}>Folk & Country Bands</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
