import React from "react";

import AboutSection from "./AboutSection";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Layout}>
        <AboutSection />
      </div>
    </div>
  );
};

export default Home;
