import React from "react";
import cx from "classnames";
import BridgeSvg from "../BridgeSvg";
import CoreSvg from "../CoreSvg";
import GalleySvg from "../GalleySvg";
import { P, Tiny, H1 } from "../../../components/Typography";
import { ButtonLink } from "../../../components/Button";
import styles from "./index.module.scss";

const Stage = ({
  onMouseEnter,
  onMouseLeave,
  hover,
  fade,
  SVG,
  details,
  genre
}: {
  onMouseEnter: (arg0: any) => void;
  onMouseLeave: (arg0: any) => void;
  hover: boolean;
  fade: boolean;
  SVG: () => React.ReactNode;
  details: string;
  genre: string;
}) => (
  <div
    onMouseEnter={e => onMouseEnter(e)}
    onMouseLeave={e => onMouseLeave(e)}
    className={cx(styles.Stage, {
      [styles.StageGlow]: hover,
      [styles.StageFade]: fade
    })}
  >
    {SVG()}
    <Tiny className={styles.ByLine}>
      {hover ? "Check back for more!" : genre}
    </Tiny>
    <div className={styles.DetailsWrapper}>
      <P small>{details}</P>
    </div>
  </div>
);

const StagesSection = () => {
  const [hover, setHover] = React.useState<
    undefined | "core" | "bridge" | "galley"
  >(undefined);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <div className={styles.LineupCTA}>
          <ButtonLink href="/lineup">Check out our Phase 1 Lineup</ButtonLink>
        </div>
        <H1 className={styles.Heading}>
          We've got three unique stages. You're sure to find something you love!
        </H1>
        <div className={styles.Stages}>
          <Stage
            onMouseEnter={() => setHover("core")}
            onMouseLeave={() => setHover(undefined)}
            hover={hover === "core"}
            fade={hover === "galley" || hover === "bridge"}
            details="Come and power up at The Core with Modern Electronic and Bass Music -
        Dubstep, House, Drum’n’Bass, Electro, Psytrance and anything powerful
        enough to shock your system into full dance mode!"
            genre="Heavy Electronic"
            SVG={() => <CoreSvg glow={hover} />}
          />
          <Stage
            onMouseEnter={() => setHover("bridge")}
            onMouseLeave={() => setHover(undefined)}
            hover={hover === "bridge"}
            fade={hover === "galley" || hover === "core"}
            details="This stage is all about musical fusion and “bridging the gap” between
        genres. Expect to see DJ equipment and live instruments playing
        together in perfect harmony. This is also where those magical sunrise
        sets take place."
            SVG={() => <BridgeSvg glow={hover} />}
            genre="Genre Fusion"
          />
          <Stage
            onMouseEnter={() => setHover("galley")}
            onMouseLeave={() => setHover(undefined)}
            hover={hover === "galley"}
            fade={hover === "bridge" || hover === "core"}
            details="Located near the Market and Food Vendors, The Galley stage is a great
        place to set up your chair and enjoy all the Folk, Country, Funk,
        Bluegrass, Blues and Rock acts that Inter.Sect has to offer."
            SVG={() => <GalleySvg glow={hover} />}
            genre="Folk & Country Bands"
          />
        </div>
      </div>
    </div>
  );
};

export default StagesSection;
