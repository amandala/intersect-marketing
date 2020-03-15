import React from "react";

import GetInvolvedSection from "./GetInvolvedSection";
import AboutSection from "./AboutSection";
import AboveTheFold from "./AboveTheFold";
import StagesSection from "./StagesSection";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Layout}>
        <AboveTheFold />
        <AboutSection />
        <StagesSection />
        <GetInvolvedSection />
      </div>
      <img
        className={styles.Earth}
        src="/planet.png"
        alt="Earth with a spaceship trail"
      />
    </div>
  );
};

export default Home;
