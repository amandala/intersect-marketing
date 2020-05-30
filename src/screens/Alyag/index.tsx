import React from "react";
import YouTube from "react-youtube-embed";
import StarHeaderPage from "../../components/StarHeaderPage";
import { ButtonLinkExternal } from "../../components/Button";
import { P, H3 } from "../../components/Typography";

import styles from "./index.module.scss";

const Alyag = () => {
  return (
    <StarHeaderPage>
      <img
        className={styles.Logo}
        src="/artists/alyag/alyag-logo-glow.png"
        alt="Alyag Logo"
      />
      <img
        className={styles.Image1}
        src="/artists/alyag/alyag3.jpg"
        alt="Alyag"
      />
      <H3 className={styles.Heading}>
        "Alyag mashes musical genres like he mashes his potatoes!"
      </H3>
      <P>
        Sean "DarkBubbz" has been spinning up fresh tracks since the ripe year
        of 2003 when he first fell in love with wanting to be on the other side
        of the decks partying as a teenager. Over the years he has fallen in
        love with many kinds of music and has grown an appreciation for anything
        with a catchy tune that will get your toes tapping. Hes out to get your
        ass shaken and booty bumpin. His main drive is to share with all the
        lovely people on that dance floor the treasures he has come along in his
        may travels across this shiny globe
      </P>
      <P>
        An eclectic amalgamation of
        electro-psy-funk-neuro-disco-DnB-trance-metal, "Alyag" is the
        self-produced sonic brainchild of multi-instrumentalist and longtime
        tune-tinkerer Alexandre Popravko. Eccentrically experimentative,
        Alexandre strives to draw upon his extensive palette of musical
        influences (ranging from Scandinavian melodeath metal, to psytrance,
        drum n' bass, glitch hop, neuro funk, IDM, ambient, synthwave, and
        more), and explore the favorite elements of each that make him groove
        and wiggle his boot, as it were. From melodic and heavy to dainty and
        light-hearted, each resulting track is a uniquely flowing fusion of
        varied genres and styles that converge together into a dynamically
        evolving soundscape journey, sparking the listener's imagination and
        encouraging them to formulate their own tale to the tune.
      </P>
      <img
        className={styles.Image1}
        src="/artists/alyag/alyag1.jpg"
        alt="Alyag"
      />
      <div className={styles.Section}>
        <H3 className={styles.Heading}>EXTRAS</H3>
        <div className={styles.Extras}>
          <YouTube id="liInmuHnBJo" />
          <div className={styles.Links}>
            <ButtonLinkExternal
              className={styles.Button}
              href="https://alyag.net/home"
            >
              VISIT: alyag.net
            </ButtonLinkExternal>
            <ButtonLinkExternal
              className={styles.Button}
              href="https://www.instagram.com/alyagstunes/"
            >
              VISIT: @alyagstune
            </ButtonLinkExternal>
          </div>
        </div>
        <img
          className={styles.Image1}
          src="/artists/alyag/alyag2.jpg"
          alt="Alyag"
        />
      </div>
    </StarHeaderPage>
  );
};

export default Alyag;
