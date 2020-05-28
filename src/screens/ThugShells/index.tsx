import React from "react";
import YouTube from "react-youtube-embed";
import ArtistSpotlightPage from "../../components/ArtistSpotlightPage";
import { ButtonLinkExternal } from "../../components/Button";
import { P, H3 } from "../../components/Typography";

import styles from "./index.module.scss";

const ThugShells = () => {
  return (
    <ArtistSpotlightPage>
      <img
        className={styles.Logo}
        src="/artists/thugShells/thuggyblue.png"
        alt="ThugShells Logo"
      />
      <img
        className={styles.Image1}
        src="/artists/thugShells/thug2.jpg"
        alt="ThugShells"
      />
      <H3 className={styles.Heading}>Shell YEAH!</H3>
      <P>
        This lil' thug is fresh off the Village Stage at the infamous Shambhala
        Music Festival, where Thug Shells has been making a name for herself in
        the global music scene. Shells proudly puts on for her community;
        Although small in stature, her presence is enormous especially in her
        hometown of Edmonton where she hosts bi-weekly freestyle night for the
        local up and comers. After just returning from her escapades overseas,
        recording her FIRST RAP ALBUM with her favorite producer, the KING OF
        BREAKBEATS, Shade K.Pocket sized self-described bubbly gangster Thug
        Shells, a humble harlequin who brings her voice to the stage. Conscious
        rap straight out of Alberta, Canada, pre-packaged with sass and (b)ass.
        With an emphasis on positivity, this little proselytizing pixie
        captivates crowds in the only way she knows how: gangster adorability.
        If Hello Kitty and the ghost of Tupac had a sizzurp-fueled three-way
        with Cardi B, Thug Shells would be their incarnation.
      </P>
      <P>
        Her roots trace back to our leader Bass Panda, he provides dank beats
        there's demand for ya, but he told us dolphins are to flock to the bass
        , so we migrated out da ocean without a trace. Rapper/MC from the YEG,
        Michelle, AKA Thug Shells, is the bubbliest gangster western Canada has
        to offer. Canadian freestyler who rapped for the first time thanks to
        the encouragement of the Freestyle Focus Group at Bass Coast 2017 - her
        aim is to lighten the mood and bring joy to all within earshot. With
        conscious lyrics juxtaposed over the most gangster basslines - the
        effervescent energy from a Thuggy set is contagious. Thug Shells will be
        sure to throw a smile on your face and a wiggle to your bum!
      </P>
      <P>
        Transcending a multitude of genres, Thug Shells is happiest throwing
        down over breakbeats and drum and bass. However, she has been known to
        rock over ANY music - maneuvering through the soundwaves as only a
        freestylin’ ferret could. Usually teaming up with her go-to
        babe-a-liscious DJ K-Stylez - these two ladies are like nothing you've
        ever MC-seen before.
      </P>
      <P>
        Since picking up her first microphone last summer, Thug Shells has
        sailed across Western Canada creating a name for herself as a conscious
        hip hop artist and weaving her way seamlessly into the Canadian festival
        scene. This summer she graced the stages of Reign Bough Fiddle, Astral
        Harvest, Motion Notion, Electric Love, Fozzyfest, Shambhala, and more
        with several international bookings as well.
      </P>
      <P>
        Look out for this Bubbly Gangster, comin' to speakers near you! Also
        make sure to check out her new hit songs Calling For You with
        Neologisticism & Groove Shake with Lady Waks and Mutantbreakz (released
        under In Beats We Trust) ranking #3 & #4 on Beatport.com!
      </P>
      <div className={styles.Section}>
        <H3 className={styles.Heading}>EXTRAS</H3>
        <div className={styles.Extras}>
          <YouTube id="bWVWdM3yqY8" />
          <YouTube id="EbjwEW_BRJM" />
          <div className={styles.Links}>
            <ButtonLinkExternal
              className={styles.Button}
              href="https://soundcloud.com/thugshells"
            >
              VISIT: Soundcloud
            </ButtonLinkExternal>
            <ButtonLinkExternal
              className={styles.Button}
              href="https://www.youtube.com/channel/UC1bRNA_fvCbcccO6QW1TZnw"
            >
              VISIT: Youtube
            </ButtonLinkExternal>
          </div>
        </div>
        <img
          className={styles.Image1}
          src="/artists/thugShells/thug1.jpg"
          alt="Thug Shells"
        />
      </div>
    </ArtistSpotlightPage>
  );
};

export default ThugShells;
