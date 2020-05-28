import React from "react";
import ArtistSpotlightPage from "../../components/ArtistSpotlightPage";
import { ButtonLinkExternal } from "../../components/Button";
import { P, H3 } from "../../components/Typography";

import styles from "./index.module.scss";

const DarkBubzz = () => {
  return (
    <ArtistSpotlightPage>
      <img
        className={styles.Logo}
        src="/artists/darkBubzz/animated1.gif"
        alt="DarkBubzz Logo"
      />
      <img
        className={styles.Image1}
        src="/artists/darkBubzz/DarkBubbZ2.jpg"
        alt="DarkBubzz"
      />
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
      <div className={styles.Section}>
        <H3 className={styles.Heading}>EXTRAS</H3>
        <div className={styles.Extras}>
          <ButtonLinkExternal
            className={styles.Button}
            href="https://www.twitch.tv/darkbubbz"
          >
            Watch: Twitch
          </ButtonLinkExternal>
          <ButtonLinkExternal
            className={styles.Button}
            href="http://freshrotation.com/darkbubbz"
          >
            Listen: Freshrotation
          </ButtonLinkExternal>
          <ButtonLinkExternal
            href="https://www.facebook.com/DarkBubbzMusic/"
            className={styles.Button}
          >
            Visit: Facebook
          </ButtonLinkExternal>
        </div>
      </div>
      <img
        className={styles.Image1}
        src="/artists/darkBubzz/DarkBubbZ4.jpg"
        alt="Tanner Berry"
      />
    </ArtistSpotlightPage>
  );
};

export default DarkBubzz;
