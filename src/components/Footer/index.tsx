import React from "react";
import { Tiny } from "../Typography";
import { ExternalLink } from "../Link";
import styles from "./index.module.scss";

const Footer = () => (
  <div className={styles.Wrapper}>
    <div className={styles.Content}>
      <div className={styles.MadeWithLove}>
        <div className={styles.DropagandaPresents}>
          <img
            className={styles.Dropaganda}
            alt="Dropaganda Logo"
            src="/dropaganda.png"
          />
        </div>
        <Tiny>
          Site made with ♡ by{" "}
          <ExternalLink href="https://www.instagram.com/mixedmanifest/">
            Mixed Manifest
          </ExternalLink>
        </Tiny>
      </div>
      <div className={styles.ContactWrapper}>
        <div className={styles.ContactSection}>
          <Tiny className={styles.GetInTouch}>Contact</Tiny>
          <ExternalLink
            className={styles.Link}
            href="mailto:info@intersectamf.com"
          >
            info@intersectamf.com
          </ExternalLink>
        </div>
        <div className={styles.ContactSection}>
          <Tiny className={styles.GetInTouch}>Social</Tiny>
          <ExternalLink
            className={styles.Link}
            href="https://www.instagram.com/inter.sect_amf/"
          >
            Instagram
          </ExternalLink>
          <ExternalLink
            className={styles.Link}
            href="https://www.facebook.com/events/357952509093995/"
          >
            Facebook
          </ExternalLink>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
