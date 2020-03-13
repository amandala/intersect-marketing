import React from "react";

import { InternalLink } from "../Link";

import styles from "./index.module.scss";

const MainNav = () => {
  return (
    <div className={styles.Wrapper}>
      <nav className={styles.Content}>
        <a
          className={styles.SocialLink}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/inter.sectAMF/?eid=ARCz9Dd8v7H0sVmpExqGWlooVydmN-jwmlHCfX7u3T0VhLJLElTyAi2KpvTsfZp667nMznov_kcW5sG1"
        >
          <img src="/fb.png" alt="Visit us on Facebook" />
        </a>
        <a
          className={styles.SocialLink}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/inter.sect_amf/"
        >
          <img
            height={24}
            width={24}
            src="/ig.png"
            alt="Visit us on Facebook"
          />
        </a>
        <InternalLink className={styles.Link} href="/">
          Home
        </InternalLink>
        <InternalLink className={styles.Link} href="/lineup">
          Lineup
        </InternalLink>
        <InternalLink className={styles.Link} href="/media">
          Media
        </InternalLink>
        <InternalLink className={styles.Link} href="/vendors">
          Vendors
        </InternalLink>
        <InternalLink className={styles.Link} href="/volunteer">
          Volunteer
        </InternalLink>
      </nav>
    </div>
  );
};

export default MainNav;
