import React from "react";

import { H1, H2, H3 } from "../../components/Typography";
import { ButtonLinkExternal, ButtonLink } from "../../components/Button";
import GetInvolvedSection from "./GetInvolvedSection";
import AboutSection from "./AboutSection";
import StagesSection from "./StagesSection";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Layout}>
        <div className={styles.AboveTheFold}>
          <img alt="Intersect Logo" className={styles.Mark} src="mark.png" />
          <img
            alt="Intersect Wordmark"
            className={styles.WordMark}
            src="type.png"
          />
          <div className={styles.DetailsWrapper}>
            <H1>Art and Music Festival</H1>
            <H2>August 21 - 23, 2020</H2>
            <H3>High Prairie, Alberta</H3>
            <div className={styles.BuyTickets}>
              <ButtonLinkExternal href="https://dropaganda.tickit.ca/events/8137-inter-sect-season-1">
                Buy Tickets
              </ButtonLinkExternal>
            </div>
          </div>
        </div>
        <AboutSection />
        <div className={styles.StayTuned}>
          <h3>
            <ButtonLink href="/lineup">Check out our Lineup</ButtonLink>
          </h3>
        </div>
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
