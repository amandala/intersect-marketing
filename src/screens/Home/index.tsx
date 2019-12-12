import React from "react";

import CoreSvg from "./CoreSvg";
import BridgeSvg from "./BridgeSvg";
import GalleySvg from "./GalleySvg";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.Layout}>
      <img className={styles.Mark} src="mark.png" />
      <img className={styles.WordMark} src="type.png" />
      <div className={styles.DetailsWrapper}>
        <h3 className={styles.Subheading}>Art and Music Festival</h3>
        <h2 className={styles.Details}>August 21 - 23, 2020</h2>
        <h2 className={styles.Details}>High Prarie, Alberta</h2>
      </div>
      <div className={styles.About}>
        <p>
          Inter.Sect Art and Music Festival is a brand new, family friendly,
          multi-genre and multi-cultural Festival that focuses on Art, Community
          and providing a safe place for different perspectives to come together
          and “ intersect”.
        </p>
        <p>
          Join us in High Prairie during the dog days of summer to celebrate
          local and internationally-acclaimed Canadian musicians, Workshops,
          Live Painting Exhibitions, and to enjoy all that our Farmers Market
          and Art Galleries have to offer. Family Camping and full service RV
          Camping is available, as well as day passes.{" "}
        </p>
      </div>
      <h3 className={styles.SubheadingCentered}>Stay Tuned!</h3>
      <h3 className={styles.SubheadingCentered}>
        Lineup releases starting January 1
      </h3>
      <div className={styles.Stages}>
        <div className={styles.Stage}>
          <CoreSvg />
          <p className={styles.Text}>Heavy Electronic</p>
          <p>
            Come and power up at The Core with Modern Electronic and Bass Music
            - Dubstep, House, Drum’n’Bass, Electro, Psytrance and anything
            powerful enough to shock your system into full dance mode!
          </p>
        </div>
        <div className={styles.Stage}>
          <BridgeSvg />
          <p className={styles.Text}>Genre Fustion</p>
          <p>
            This stage is all about musical fusion and “bridging the gap”
            between genres. Expect to see DJ equipment and live instruments
            playing together in perfect harmony. This is also where those
            magical sunrise sets take place.
          </p>
        </div>
        <div className={styles.Stage}>
          <GalleySvg />
          <p className={styles.Text}>Folk & Country Bands</p>
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

export default Home;
