import React from "react";
import NebulaPage from "../../components/NebulaPage";
import BlackDiv from "../../components/BlackDiv";

import styles from "./index.module.scss";

const Lineup = () => {
  return (
    <NebulaPage>
      <BlackDiv>
        <img
          className={styles.Image}
          src="/INTERSECT-lineup1-min.jpg"
          alt="INTERSECT Lineup Phase 1"
        />
      </BlackDiv>
    </NebulaPage>
  );
};

export default Lineup;
