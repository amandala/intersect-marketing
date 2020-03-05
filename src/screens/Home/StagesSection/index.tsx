import React from "react";
import cx from "classnames";
import BridgeSvg from "../BridgeSvg";
import CoreSvg from "../CoreSvg";
import GalleySvg from "../GalleySvg";
import styles from "./index.module.scss";

const StagesSection = () => {
  const [hover, setHover] = React.useState<
    undefined | "core" | "bridge" | "galley"
  >(undefined);

  return (
    <div className={styles.Stages}>
      <div
        onMouseEnter={() => setHover("core")}
        onMouseLeave={() => setHover(undefined)}
      >
        <div
          className={cx(styles.Stage, {
            [styles.StageGlow]: hover === "core",
            [styles.StageFade]: hover === "galley" || hover === "bridge"
          })}
        >
          <CoreSvg glow={hover} />
          <p className={styles.Text}>
            {hover === "core" ? "Lineups released soon!" : "Heavy Electronic"}
          </p>
          <p>
            Come and power up at The Core with Modern Electronic and Bass Music
            - Dubstep, House, Drum’n’Bass, Electro, Psytrance and anything
            powerful enough to shock your system into full dance mode!
          </p>
        </div>
      </div>
      <div
        onMouseEnter={() => setHover("bridge")}
        onMouseLeave={() => setHover(undefined)}
      >
        <div
          className={cx(styles.Stage, {
            [styles.StageGlow]: hover === "bridge",
            [styles.StageFade]: hover === "core" || hover === "galley"
          })}
        >
          <BridgeSvg glow={hover} />
          <p className={styles.Text}>
            {hover === "bridge" ? "Lineups released soon!" : "Genre Fusion"}
          </p>

          <p>
            This stage is all about musical fusion and “bridging the gap”
            between genres. Expect to see DJ equipment and live instruments
            playing together in perfect harmony. This is also where those
            magical sunrise sets take place.
          </p>
        </div>
      </div>
      <div
        onMouseEnter={() => setHover("galley")}
        onMouseLeave={() => setHover(undefined)}
      >
        <div
          className={cx(styles.Stage, {
            [styles.StageGlow]: hover === "galley",
            [styles.StageFade]: hover === "core" || hover === "bridge"
          })}
        >
          <GalleySvg glow={hover} />
          <p className={styles.Text}>
            {hover === "galley"
              ? "Lineups released soon!"
              : "Folk & Country Bands"}
          </p>
          <p>
            Located near the Market and Food Vendors, The Galley stage is a
            great place to set up your chair and enjoy all the Folk, Country,
            Funk, Bluegrass, Blues and Rock acts that Inter.Sect has to offer.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StagesSection;
