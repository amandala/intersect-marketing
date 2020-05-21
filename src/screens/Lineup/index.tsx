import React from "react";
import NebulaPage from "../../components/NebulaPage";
import Section from "../../components/Section";

import styles from "./index.module.scss";

const Lineup = () => {
  return (
    <NebulaPage>
      <Section>
        <div className={styles.Wrapper}>
          <img
            className={styles.Image}
            src="/INTERSECT-lineup1-min.jpg"
            alt="INTERSECT Lineup Phase 1"
          />
        </div>
      </Section>
    </NebulaPage>
  );
};

export default Lineup;
