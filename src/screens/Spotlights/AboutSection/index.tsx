import React from "react";
import { P } from "../../../components/Typography";
import Section from "../../../components/Section";
import { InternalLink } from "../../../components/Link";
import styles from "./index.module.scss";

const AboutSection = () => {
  return (
    <Section>
      <div className={styles.Content}>
        <P>
          Brought to you from the beautiful Sunstone Inn Bed and Breakfast in
          Northern Alberta, The Inter.Sessions seek to bring together many of
          the amazing and diverse artists featured at the Inter.Sect Art and
          Music Festival.
        </P>
        <P>
          From The Bridge, The Core and The Galley stages come a wide variety of
          genres and talents! Join us in celebrating new and exciting flavours
          of Canadian Electronic/Bass, Rock, Folk, Country, Hip-Hop, Fusion and
          Blues, while Live Art/Painting is done in real time, all from the
          gorgeous backdrop of an intimate, lakeside bed and breakfast.
        </P>
        <P>
          BEYOND THE LIVESTREAM The Inter.Sessions are more than just a live
          stream event! Be part of a much more intimate experience through our
          Podcasts, Interviews, “Live Off The Floor” recordings of spontaneous
          Jams and Collaborations, and fresh and surprising bonus content.
        </P>
        <img
          className={styles.ArtistLogo}
          src="/genesa/KaliYugaGenesaLogo.png"
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
        <P>
          Behind the decks, their live performance is high energy and
          interactive; engaging the audience through wild movement and ecstatic
          drive. Known for bringing the deep and heavy bass, their selection of
          trap, psytrap, neurohop, and glitchy bass music in addition to live
          guitar and synth work is sure to get your booty movin’ in the most
          obscene and obscure means possible.
        </P>
        <P>
          A favourite within the Western Canadian electronic music scene, they
          have graced the stages of many events and festivals such as Shambhala,
          Astral Harvest and Motion Notion. Catch them coming up at Inter.Sect
          Sessions Part 1 on June 6, 2020.
        </P>
        <InternalLink href="/genesaproject">View full spotlight</InternalLink>
      </div>
    </Section>
  );
};

export default AboutSection;
