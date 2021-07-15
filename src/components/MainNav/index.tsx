import React from "react";
import cx from "classnames";
import { ExternalLink, InternalLink } from "../Link";

import styles from "./index.module.scss";

const MainNav = ({
  mobileNavOpen,
  setMobileNavOpen
}: {
  mobileNavOpen: boolean;
  setMobileNavOpen: (arg0: boolean) => void;
}) => {
  return (
    <div className={styles.Wrapper}>
      <nav
        className={cx(styles.Content, { [styles.ContentOpen]: mobileNavOpen })}
      >
        <div className={styles.NavLinksWrapper}>
          <button
            className={cx(styles.NavButton, {
              [styles.NavButtonOpen]: mobileNavOpen
            })}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? "X" : "MENU"}
          </button>
          <div
            className={cx(styles.NavLinks, {
              [styles.NavLinksOpen]: mobileNavOpen
            })}
          >
            <InternalLink
              onClick={() => setMobileNavOpen(false)}
              className={styles.Link}
              href="/"
            >
              <img className={styles.Logo} src="/mark.png" />
            </InternalLink>
            <ExternalLink
              onClick={() => setMobileNavOpen(false)}
              className={styles.Link}
              href="https://dropaganda.tickit.ca/events/12365"
            >
              Tickets
            </ExternalLink>
            <InternalLink
              onClick={() => setMobileNavOpen(false)}
              className={styles.Link}
              href="/updates"
            >
              Updates
            </InternalLink>
            {/* <InternalLink
              onClick={() => setMobileNavOpen(false)}
              className={styles.Link}
              href="/media"
            >
              Vendors Market
            </InternalLink>=====
            <InternalLink
              onClick={() => setMobileNavOpen(false)}
              className={styles.Link}
              href="/vendors"
            >
              About
            </InternalLink> */}
          </div>
        </div>
        <div className={styles.Social}>
          <a
            className={styles.SocialLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/events/357952509093995/"
          >
            <img
              height={20}
              width={20}
              src="/icons/facebook-3-64.png"
              alt="Visit us on Facebook"
            />
          </a>
          <a
            className={styles.SocialLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/inter.sect_amf/"
          >
            <img
              height={20}
              width={20}
              src="/icons/instagram-3-64.png"
              alt="Visit us on Facebook"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
