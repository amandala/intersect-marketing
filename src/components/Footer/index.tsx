import React from "react";
import { Tiny } from "../Typography";
import { ExternalLink } from "../Link";
import styles from "./index.module.scss";

const Footer = () => (
  <div className={styles.Wrapper}>
    <div className={styles.Content}>
      <div className={styles.MadeWithLove}>
        <Tiny>
          Site made with ♡ by{" "}
          <ExternalLink href="http://www.portad.ca">Port:AD</ExternalLink>
        </Tiny>
      </div>
      <div>
        <Tiny>
          Need to get in touch?{" "}
          <ExternalLink href="mailto:info@intersectamf.com">
            Send us an email
          </ExternalLink>
        </Tiny>
      </div>
    </div>
  </div>
);

export default Footer;
