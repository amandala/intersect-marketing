import React from "react";
import { P } from "../../components/Typography";
import { InternalLink } from "../../components/Link";
import ArtistSpotlightPage from "../../components/ArtistSpotlightPage";

import styles from "./index.module.scss";

const Lineup = () => {
  return (
    <ArtistSpotlightPage header="** PLACEHOLDER ** VOLUME 1 ** PLACEHOLDER ** ">
      <div className={styles.ArtistMini}>
        <img
          className={styles.ArtistLogo}
          src="/artists/genesa/KaliYugaGenesaLogo.png"
          alt="Kali Yuga and the Genesa Project Logo"
        />
        <P>
          Kali Yuga & The Genesa Project (Tanner Berry) are a dynamic duo of
          do-ers whose passion for the electronic music community and love for
          one another shines through in all of their work. Their project
          encompasses a wide range of ventures, including producing and spinning
          music, stage design, event curation, and video podcast hosting.
          Whatever the medium, be it through music, art, production, or
          podcasts; The Genesa Project & Kali Yuga strive to connect people
          within the community and make their dreams come true.
        </P>
        <InternalLink href="/genesaproject">View full spotlight</InternalLink>
      </div>
      <div className={styles.ArtistMini}>
        <img
          className={styles.ArtistLogo}
          src="/artists/alyag/alyag-logo.png"
          alt="Alyag Logo"
        />
        <P>
          An eclectic amalgamation of Electro-Psy-Funk-DnB-Disco-Trance-Metal,
          "Alyag" is a Calgary, Canada based multi-instrumentalist, music
          producer, crafty tinkerer, and sassball extraordinaire.
        </P>
        <InternalLink href="/alyag">View full spotlight</InternalLink>
      </div>
      <div className={styles.ArtistMini}>
        <img
          className={styles.ArtistLogo}
          src="/artists/whisper/whisper-logo.png"
          alt="Whisper Logo"
        />
        <P>
          Expect an assault of all flavors of drum & bass with sprinklings of
          original music throughout. Whisper has set the stage for many top
          shelf acts, the likes of which include Logistics, Xilent, Optiv,
          Spectrasoul, S.P.Y., LongWalkShortDock, Dub Phizix, Shlump, Serial
          Killaz, Aries, Logistics, Dieselboy and many more.
        </P>
        <InternalLink href="/whisper">View full spotlight</InternalLink>
      </div>
      <div className={styles.ArtistMini}>
        <img
          className={styles.ArtistLogo}
          src="/artists/thugShells/thug-shells-bw.png"
          alt="Thug Shells Logo"
        />
        <P>
          Transcending a multitude of genres, Thug Shells is happiest throwing
          down over breakbeats and drum and bass. However, she has been known to
          rock over ANY music - maneuvering through the soundwaves as only a
          freestylin’ ferret could. Usually teaming up with her go-to
          babe-a-liscious DJ K-Stylez - these two ladies are like nothing you've
          ever MC-seen before.
        </P>
        <InternalLink href="/thugshells">View full spotlight</InternalLink>
      </div>
      <div className={styles.ArtistMini}>
        {/* //TODO: update to white logo */}
        <img
          className={styles.ArtistLogo}
          src="/artists/darkBubzz/DarkBubbzLight.png"
          alt="DarkBubzz Logo"
        />
        <P>
          Sean "DarkBubbz" has been spinning up fresh tracks since the ripe year
          of 2003 when he first fell in love with vinyl music.. Currently based
          out of Edmonton, Alberta, Canada. Spinning Glitch, Electro, Drum &
          Bass, Dubstep and all kinds of Crazy Bass music
        </P>
        <InternalLink href="/darkbubzz">View full spotlight</InternalLink>
      </div>
    </ArtistSpotlightPage>
  );
};

export default Lineup;
