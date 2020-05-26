import React from "react";
import { P, H2 } from "../../../components/Typography";
import Section from "../../../components/Section";
import { ButtonLink } from "../../../components/Button";
import styles from "./index.module.scss";

const AboutSection = () => {
  return (
    <div>
      <Section>
        <div className={styles.Content}>
          <P>
            Brought to you from the beautiful Sunstone Inn Bed and Breakfast in
            Northern Alberta, The Inter.Sessions seek to bring together many of
            the amazing and diverse artists featured at the Inter.Sect Art and
            Music Festival.
          </P>
          <P>
            From The Bridge, The Core and The Galley stages come a wide variety
            of genres and talents! Join us in celebrating new and exciting
            flavours of Canadian Electronic/Bass, Rock, Folk, Country, Hip-Hop,
            Fusion and Blues, while Live Art/Painting is done in real time, all
            from the gorgeous backdrop of an intimate, lakeside bed and
            breakfast.
          </P>
          <P>
            BEYOND THE LIVESTREAM The Inter.Sessions are more than just a live
            stream event! Be part of a much more intimate experience through our
            Podcasts, Interviews, “Live Off The Floor” recordings of spontaneous
            Jams and Collaborations, and fresh and surprising bonus content.
          </P>
        </div>
      </Section>
      <Section>
        <div className={styles.DetailsWrapper}>
          <H2 className={styles.Featuring}>
            VOLUME 1 - JUNE 6, 2020 FEATURING:
          </H2>
          <div className={styles.ArtistLogos}>
            <img
              className={styles.ArtistLogo}
              src="/artists/genesa/KaliYugaGenesaLogo.png"
              alt="Kali Yuga and the Genesa Project Logo"
            />
            <img
              className={styles.ArtistLogo}
              src="/artists/alyag/alyag-logo.png"
              alt="Alyag Logo"
            />
            <img
              className={styles.ArtistLogo}
              src="/artists/whisper/whisper-logo.png"
              alt="Whisper Logo"
            />
            <img
              className={styles.ArtistLogo}
              src="/artists/thugShells/thug-shells-bw.png"
              alt="Thug Shells Logo"
            />
          </div>
          <ButtonLink href="/spotlights">
            Check out our artist spotlights
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
};

export default AboutSection;
