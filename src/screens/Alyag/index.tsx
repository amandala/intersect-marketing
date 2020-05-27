import React from "react";
import YouTube from "react-youtube";
import ArtistSpotlightPage from "../../components/ArtistSpotlightPage";
import { ButtonLinkExternal } from "../../components/Button";
import { P, H3 } from "../../components/Typography";

import styles from "./index.module.scss";

const opts = {
  height: "auto",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

const Alyag = () => {
  return (
    <ArtistSpotlightPage
      header={
        <img
          className={styles.Logo}
          src="/artists/alyag/alyag-logo.png"
          alt="Kali Yuga and the Genesa Project"
        />
      }
    >
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
        The Genesa Project is a duo of doers. Based out of Calgary, AB, Canada,
        the project encompasses a wide range of ideas and ventures, including
        local event promoting, stage design, music production, and video podcast
        hosting. Our first local event was held in 2011; a small, intimate venue
        with a modest turnout. Since then, the project has snowballed, gaining
        momentum with opportunities to work with and perform at a number of
        western Canadian music festivals such as Shambhala, Astral Harvest,
        Motion Notion, Inshala, and FozzyFest. Through the local event series,
        we have brought artists such as Defunk, DJ QBert, Mr. Bill, Govinda,
        Mochipet, and ill-Esha to our Calgary based scene. We strive to provide
        a different kind of sound to our local area; what many might consider to
        be "out of the box". Our goal is to always have multiple live musical
        elements within each show, including live instrumentals, drums and
        vocals.
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
      <img
        className={styles.Image1}
        src="/artists/alyag/alyag2.jpg"
        alt="Alyag"
      />

      <div className={styles.Section}>
        <H3 className={styles.Heading}>EXTRAS</H3>
        <div className={styles.Extras}>
          <YouTube className={styles.Video} videoId="liInmuHnBJo" />
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
    </ArtistSpotlightPage>
  );
};

export default Alyag;
