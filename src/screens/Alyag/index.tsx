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
      <P>
        On stage, Alyag is an even farther reaching extension of that eclectic
        energy, blending all original music into a cohesive, ever-flowing
        electronic mix while he deftly switches between live guitars,
        synthesizers, and drum samplers amid a furious whirlwind of emotes. Each
        set is uniquely arranged, featuring extensive remixes of his existing
        work coupled with unreleased material and new transitions - often entire
        musical sections not heard anywhere else - tailored specifically toward
        that individual performance.
      </P>
      <P>
        In the wake of a series of singles and 2018's "Recreational
        Schizophrenia" EP, 2019 has seen the November release of Alyag's first
        full-length album, "The Graveyard of Maybe-Somethings", as well as an
        ever-expanding roster of live shows. Most notable appearances include
        Reign Bough Fiddle, FozzyFest, Astral Harvest, Shambhala, and Wicked
        Woods music festivals, often alongside Kali Yuga & The Genesa Project,
        as well as multiple performances at the Ship & Anchor, Habitat, HiFi,
        and Junction clubs in Calgary.
      </P>
      <P>
        With a continuously evolving multitude of ideas and projects lined up to
        add to his already considerable aural arsenal, 2020 is primed to be a
        busy and exciting year for Alyag, whose production proclivity is only
        just ramping up.
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
              href="https://alyag.bandcamp.com/"
            >
              VISIT: BandCamp
            </ButtonLinkExternal>

            <ButtonLinkExternal
              className={styles.Button}
              href="https://soundcloud.com/alyag"
            >
              VISIT: SoundCloud
            </ButtonLinkExternal>
            <ButtonLinkExternal
              className={styles.Button}
              href="https://www.facebook.com/alyagstunes"
            >
              VISIT: Facebook
            </ButtonLinkExternal>
            <ButtonLinkExternal
              className={styles.Button}
              href="https://www.instagram.com/alyagstunes/"
            >
              VISIT: Instagram
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
