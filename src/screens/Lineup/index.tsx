import React from "react";
import NebulaPage from "../../components/NebulaPage";
import BlackDiv from "../../components/BlackDiv";

import styles from "./index.module.scss";

const Lineup = () => {
  return (
    <NebulaPage>
      <BlackDiv>
        <div className={styles.Wrapper}>
          <img
            className={styles.Image}
            src="/INTERSECT-lineup1-min.jpg"
            alt="INTERSECT Lineup Phase 1"
          />
        </div>
      </BlackDiv>
    </NebulaPage>
  );
};

export default Lineup;
