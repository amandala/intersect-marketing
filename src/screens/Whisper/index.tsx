import React from "react";
import YouTube from "react-youtube-embed";
import StarHeaderPage from "../../components/StarHeaderPage";
import { ButtonLinkExternal } from "../../components/Button";
import { P, H3 } from "../../components/Typography";

import styles from "./index.module.scss";

const Whisper = () => {
  return (
    <StarHeaderPage black>
      <video
        className={styles.Logo}
        autoPlay
        loop
        src="/artists/whisper/logo.mp4"
      />
      <img
        className={styles.Image1}
        src="/artists/whisper/whisper1.jpg"
        alt="Kali Yuga and Tanner Berry"
      />
      <P>
        Whisper has made a name for himself in the western Canadian festival
        circuit as a drum & bass DJ and producer primarily but also as a FOH
        audio technician and production assistant from Calgary to Vancouver. He
        has been cutting a groove for himself amidst Vancouver locals and close
        circles through after hours drum & bass events.
      </P>
      <P>
        2020 is looking to be a crazy year, approaching the one-year anniversary
        of the Undersound and Enter the Jungle event series in Vancouver, the
        birth of WolfPack Audio-Visual and another rip around His live sets are
        summarized as in-your-face, energy packed cardio sessions at a breakneck
        pace. Expect an assault of all flavors of drum & bass with sprinklings
        of original music throughout.
      </P>
      <P>
        Whisper has set the stage for many top shelf acts, the likes of which
        include Logistics, Xilent, Optiv, Spectrasoul, S.P.Y.,
        LongWalkShortDock, Dub Phizix, Shlump, Serial Killaz, Aries, Logistics,
        Dieselboy and many more.
      </P>
      <img
        className={styles.Image1}
        src="/artists/whisper/whisper2.jpg"
        alt="Whisper"
      />
      <img
        className={styles.Image1}
        src="/artists/whisper/whisper3.jpg"
        alt="Whisper"
      />
      <div className={styles.Section}>
        <H3 className={styles.Heading}>EXTRAS</H3>
        <div className={styles.Extras}>
          <YouTube id="wHPn8mxBHzA" />
          <div className={styles.Links}>
            <ButtonLinkExternal
              className={styles.Button}
              href="https://www.twitch.tv/videos/596325196?sr=a&t=11331s"
            >
              Visit: Twitch
            </ButtonLinkExternal>
            <ButtonLinkExternal
              className={styles.Button}
              href="https://www.instagram.com/whisperbass/"
            >
              Visit: Instagram
            </ButtonLinkExternal>
            <ButtonLinkExternal
              className={styles.Button}
              href="http://www.mixcloud.com/dustinwolfe"
            >
              Visit: Mixcloud
            </ButtonLinkExternal>
            <ButtonLinkExternal
              className={styles.Button}
              href="http://www.soundcloud.com/whisperbass"
            >
              Visit: Soundcloud
            </ButtonLinkExternal>
            <ButtonLinkExternal
              className={styles.Button}
              href="http://www.soundcloud.com/whisperbass"
            >
              Visit: Youtube
            </ButtonLinkExternal>
          </div>
        </div>
        <img
          className={styles.Image1}
          src="/artists/whisper/whisper4.jpg"
          alt="Whisper"
        />
      </div>
    </StarHeaderPage>
  );
};

export default Whisper;
