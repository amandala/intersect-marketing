import React from "react";
import cx from "classnames";
import { InternalLink } from "../Link";

import styles from "./index.module.scss";

const MainNav = ({
  mobileNavOpen,
  setMobileNavOpen,
}: {
  mobileNavOpen: boolean;
  setMobileNavOpen: (arg0: boolean) => void;
}) => {
  return (
    <div className={styles.Wrapper}>
      <nav className={styles.Content}>
        <div className={styles.NavLinksWrapper}>
          <button
            className={styles.NavButton}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? "X" : "|||"}
          </button>
          <div
            className={cx(styles.NavLinks, {
              [styles.NavLinksOpen]: mobileNavOpen,
            })}
          >
            <InternalLink
              onClick={() => setMobileNavOpen(false)}
              className={styles.Link}
              href="/"
            >
              Home
            </InternalLink>
            <InternalLink
              onClick={() => setMobileNavOpen(false)}
              className={styles.Link}
              href="/creatives"
            >
              Artist Spotlight
            </InternalLink>
            <InternalLink
              onClick={() => setMobileNavOpen(false)}
              className={styles.Link}
              href="/lineup"
            >
              Live Stream
            </InternalLink>
            <InternalLink
              onClick={() => setMobileNavOpen(false)}
              className={styles.Link}
              href="/media"
            >
              Vendors Market
            </InternalLink>
            <InternalLink
              onClick={() => setMobileNavOpen(false)}
              className={styles.Link}
              href="/vendors"
            >
              About
            </InternalLink>
          </div>
        </div>
        <div className={styles.Social}>
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
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
