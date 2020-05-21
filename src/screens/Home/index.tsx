import React from "react";

import GetInvolvedSection from "./GetInvolvedSection";
import AboutSection from "./AboutSection";
import AboveTheFold from "./AboveTheFold";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Layout}>
        <AboveTheFold />
        <AboutSection />
        <GetInvolvedSection />
      </div>
    </div>
  );
};

export default Home;
