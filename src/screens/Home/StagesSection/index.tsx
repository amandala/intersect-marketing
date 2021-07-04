import React from "react";
import cx from "classnames";
import BridgeSvg from "./BridgeSvg";
import GalleySvg from "./GalleySvg";
import { P, Tiny, H1 } from "../../../components/Typography";
import styles from "./index.module.scss";

const Stage = ({
  onMouseEnter,
  onMouseLeave,
  hover,
  fade,
  SVG,
  details,
  genre,
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
    onMouseEnter={(e) => onMouseEnter(e)}
    onMouseLeave={(e) => onMouseLeave(e)}
    className={cx(styles.Stage, {
      [styles.StageGlow]: hover,
      [styles.StageFade]: fade,
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
        <H1 className={styles.Heading}>
          We've got two unique stages. You're sure to find something you love!
        </H1>
        <div className={styles.Stages}>
          {/* <Stage
            onMouseEnter={() => setHover("core")}
            onMouseLeave={() => setHover(undefined)}
            hover={hover === "core"}
            fade={hover === "galley" || hover === "bridge"}
            details="Come and power up at The Core with Modern Electronic and Bass Music -
        Dubstep, House, Drum’n’Bass, Electro, Psytrance and anything powerful
        enough to shock your system into full dance mode!"
            genre="Heavy Electronic"
            SVG={() => <CoreSvg glow={hover} />}
          /> */}
          <Stage
            onMouseEnter={() => setHover("bridge")}
            onMouseLeave={() => setHover(undefined)}
            hover={hover === "bridge"}
            fade={hover === "galley" || hover === "core"}
            details="Witness commanding electronic and hip-hop performances on 'The Bridge'. This year, the command deck of the Inter.sect comes alive with a variety of compelling Electronic and Hip-hop acts that are sure to demand some dancing. With skilled and passionate Lighting and Projection techs at the ready, The Bridge is sure to inspire wonder and joy until the sun rises."
            SVG={() => <BridgeSvg glow={hover} />}
            genre="Genre Fusion"
          />
          <Stage
            onMouseEnter={() => setHover("galley")}
            onMouseLeave={() => setHover(undefined)}
            hover={hover === "galley"}
            fade={hover === "bridge" || hover === "core"}
            details="Wander over to 'The Galley' to see what delicious tunes the bands are cooking up. From folk, funk, country, rock, blues, metal and so much more: The Galley is dedicated to offering a little bit of everything for anyone to enjoy. So grab your chair, grab a snack and chow down on this feast for the senses."
            SVG={() => <GalleySvg glow={hover} />}
            genre="Folk & Country Bands"
          />
        </div>
      </div>
    </div>
  );
};

export default StagesSection;
