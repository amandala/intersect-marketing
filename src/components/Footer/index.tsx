import React from "react";
import { Tiny } from "../Typography";
import styles from "./index.module.scss";

const Footer = () => (
  <div className={styles.Wrapper}>
    <div className={styles.Content}>
      <div className={styles.MadeWithLove}>
        <Tiny>
          Site made with ♡ by{" "}
          <a
            className={styles.Link}
            href="http://www.portad.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Port:AD
          </a>
        </Tiny>
      </div>
    </div>
  </div>
);

export default Footer;
