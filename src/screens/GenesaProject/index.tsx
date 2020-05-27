import React from "react";
import ArtistSpotlightPage from "../../components/ArtistSpotlightPage";
import { ButtonLinkExternal } from "../../components/Button";
import { P, H3 } from "../../components/Typography";

import styles from "./index.module.scss";

const GenesaProject = () => {
  return (
    <ArtistSpotlightPage>
      <img
        className={styles.Logo}
        src="/artists/genesa/KaliYugaGenesaLogo.png"
        alt="Kali Yuga and the Genesa Project"
      />
      <img
        className={styles.Image1}
        src="/artists/genesa/both2.jpg"
        alt="Kali Yuga and Tanner Berry"
      />
      <H3 className={styles.Heading}>PRODUCTION / PERFORMANCE DUO</H3>
      <P>
        “Genesa represents a Super Energy System that serves to clear the way
        for anything you want to do.” Promoting opportunity in various aspects,
        The Genesa Project strives to showcase rising talent alongside bigger
        names. Having the opportunity as a young, inspired artist to work with
        the very source of inspiration can do wonders for motivation and drive.
        Whatever the medium, be it through music, art, fashion or general ideas,
        The Genesa Project aims to connect people within the community and make
        dreams come true.
      </P>
      <P>
        The dynamic, coupling of The Genesa Project (Tanner Berry) and partner
        Kali Yuga bring together a very unique flair behind the decks. With high
        energy and love for the community, they have been making great strides
        within the Calgary electronic music scene.
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
        You can expect our own live performance to be high energy and
        interactive, engaging the audience through wild movement and ecstatic
        drive. The music we play moves us, and we want nothing more than to move
        along with our crowd!
      </P>
      <P>
        Through our event promotion, we have developed a passion for elegant
        stage design. Since 2013, we have had the opportunity to work with Beama
        Visual Environments, who are the video mapping masterminds behind
        Shambhala's Fractal Forest, Pagoda, and Village stages. Working with
        them has provided incredible insight into original stage design and set
        up, as well as learning what it takes to really draw a crowd in,
        visually and energetically. Our video podcast project, The Genesa
        ThoughtLab, kicked off in January, 2016. We have hosted artists such as
        Defunk, Longwalkshortdock, Frequent and Evoke in our first run of
        episodes. With topics and guests ranging from music, local artists,
        activists, and fellow promoters, we have the ability to present ideas
        and subjects from an unimaginably broad spectrum of beautiful humans.
      </P>
      <div className={styles.Logos}>
        <img
          className={styles.Logo}
          src="/artists/genesa/KaliYugaLogo.png"
          alt="Kali Yuga Logo"
        />
        <img
          className={styles.Logo}
          src="/artists/genesa/GenesaProjectLogo.png"
          alt="Genesa Project Logo"
        />
      </div>
      <div className={styles.Section}>
        <H3 className={styles.Heading}>ACKNOWLEDGEMENTS</H3>
        <P>
          "Longtime purveyors of auditory excellence, [they] have been slaying
          dancefloors with extreme bodacity for nearly a decade. Prepare your
          orifices for a sonic earfucking the likes of which has ne'er been
          seen, except for those other totally radsauce shindigs when they done
          gone laid down dem sweetassed beats. Yea verily: Unto thine earholes
          shalt be poured pure liquid gold, but not like literally as such would
          likely maketh thee spake thusly: ouch."
          <span className={styles.Author}>
            - SEAN DANCO, GENESA SECURITY TEAM
          </span>
        </P>
        <P>
          "The Genesa Series holds events that are heavily oriented with the
          community, oftentimes choosing the smaller venues for their shows
          rather than clubs and bars, and always enjoying a heavy attendance
          from flow performers, dancers, DJs, and promoters from Calgary. The
          family energy was vibrant, and wonderfully evidenced by the group hug
          that was called to end the night and celebrate Tanner Berry of The
          Genesa Project’s birthday. Thank you to The Genesa Series for
          providing a truly beautiful show, with such a refreshingly pure
          essence."
          <span className={styles.Author}>- JO HORWOOD, B&K EVENT REVIEW</span>
        </P>
      </div>
      <div className={styles.Section}>
        <H3 className={styles.Heading}>EXTRAS</H3>
        <div className={styles.Extras}>
          <ButtonLinkExternal
            className={styles.Button}
            href="https://www.facebook.com/watch/?v=271923116803085"
          >
            Watch: Pagoda 2018 Official Recap
          </ButtonLinkExternal>
          <ButtonLinkExternal
            className={styles.Button}
            href="https://www.facebook.com/watch/?v=1423904740954745"
          >
            Watch: The Genesa Series Presents Mr. Bill
          </ButtonLinkExternal>
          <ButtonLinkExternal
            className={styles.Button}
            href="https://www.facebook.com/watch/?v=1169251959753359"
          >
            Watch: The Genesa Series NYE 2016
          </ButtonLinkExternal>
          <ButtonLinkExternal
            className={styles.Button}
            href="http://www.genesaproject.com/thoughtlab-podcast2-1/2016/10/19/episode-019-cjsw-909-the-mix-up-august-27th-2016-the-genesa-project"
          >
            Listen: 90.9 CJSW Calgary Radio Appearance
          </ButtonLinkExternal>
          <ButtonLinkExternal
            className={styles.Button}
            href="http://www.genesaproject.com/thoughtlab/"
          >
            Listen: Genesa ThoughtLab Podcast
          </ButtonLinkExternal>
          <ButtonLinkExternal
            className={styles.Button}
            href="http://www.freqmagazine.com/freq-does-shambhala20/"
          >
            Read: Mention in FREQ Magazine @Shambhala 20
          </ButtonLinkExternal>
        </div>
      </div>
      <img
        className={styles.Image1}
        src="/artists/genesa/kali.jpg"
        alt="Kali Yuga"
      />
      <img
        className={styles.Image1}
        src="/artists/genesa/tanner.jpg"
        alt="Tanner Berry"
      />
    </ArtistSpotlightPage>
  );
};

export default GenesaProject;
