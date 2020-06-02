import React from "react";
import { Link } from "react-router-dom";
import { P, H1, H2, H3, Tiny } from "../../../components/Typography";
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
            Music Festival. From The Bridge, The Core and The Galley stages come
            a wide variety of genres and talents!
          </P>
          <P>
            Join us in celebrating new and exciting flavours of Canadian
            Electronic/Bass, Rock, Folk, Country, Hip-Hop, Fusion and Blues,
            while Live Art/Painting is done in real time, all from the gorgeous
            backdrop of an intimate, lakeside bed and breakfast.
          </P>
        </div>
      </Section>
      <div className={styles.VolumeInfo}>
        <H1 className={styles.Centered}>VOLUME 1 STREAMING JUNE 6, 2020</H1>
      </div>
      <Section>
        <div className={styles.Content}>
          <H3>BEYOND THE LIVESTREAM</H3>
          <P>
            The Inter.Sessions are more than just a live stream event! Be part
            of a much more intimate experience through our Podcasts, Interviews,
            “Live Off The Floor” recordings of spontaneous jams, collaborations,
            and fresh and surprising bonus content.
          </P>
          <H3>SUPPORT FINE ART</H3>
          <P>
            Creative expression is at our core. Inter.Sect Art and Music
            Festival & Inter.Sessions are dedicated to curating, exposing, and
            supporting amazing and thought-provoking fine arts from up and
            coming to established artists. Stand with us in supporting our
            dedicated Canadian creators.
          </P>
          <H3>ALL ABOUT THE MERCH</H3>
          <P>
            Interact in the chats on our streams and keep your eyes peeled for
            contests to get your hands on unique and interesting merchandise
            from our musicians, artists, sponsors, and festival vendors. Be on
            the look-out for our online Vendors Market weekends!
          </P>
          {/* //TODO: link vendor page */}
        </div>
      </Section>
      <Section>
        <div className={styles.DetailsWrapper}>
          <img
            className={styles.VolumeLogo}
            src="/sessions/v1type.png"
            alt="Kali Yuga and the Genesa Project Logo"
          />
          <Tiny className={styles.Featuring}>FEATURING</Tiny>
          <div className={styles.ArtistLogos}>
            <Link to="/genesaproject">
              <img
                className={styles.ArtistLogo}
                src="/artists/genesa/KaliYugaGenesaLogo.png"
                alt="Kali Yuga and the Genesa Project Logo"
              />
            </Link>
            <Link to="/whisper">
              <img
                className={styles.ArtistLogo}
                src="/artists/whisper/whisper-logo.png"
                alt="Whisper Logo"
              />
            </Link>
            <Link to="/alyag">
              <img
                className={styles.ArtistLogo}
                src="/artists/alyag/alyag-logo.png"
                alt="Alyag Logo"
              />
            </Link>
            <Link to="/darkbubzz">
              <img
                className={styles.ArtistLogo}
                src="/artists/darkBubzz/bubzz.png"
                alt="DarkBubzz Logo"
              />
            </Link>
            <Tiny className={styles.Mc}>WITH SPECIAL GUEST MC</Tiny>
            <Link to="/thugshells">
              <img
                className={styles.ArtistLogo}
                src="/artists/thugShells/thug-shells-plain.png"
                alt="Thug Shells Logo"
              />
            </Link>
          </div>
          <ButtonLink href="/lineup">
            Check out our artist spotlights
          </ButtonLink>
        </div>
      </Section>
      <Section>
        <div className={styles.Content}>
          <H1 className={styles.Centered}>NOTICE OF POSTPONEMENT</H1>
          <P>
            It is with the heaviest of hearts that we must make the difficult,
            yet responsible choice to postpone Inter.Sect Art and Music Festival
            to August 20, 2021.
          </P>
          <P>
            Please take a moment to read our{" "}
            <a className={styles.Link} href="/about">
              notice of postponement
            </a>{" "}
            for insight on tickets purchased and vending.
          </P>
          <P>
            It breaks our heart to delay our inaugural year, but we look forward
            to connecting with you all digitally through our Inter.Sessions
            platform from the comfort of your own homes.
          </P>
        </div>
      </Section>
    </div>
  );
};

export default AboutSection;
