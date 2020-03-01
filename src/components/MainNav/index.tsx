import React from "react";

import Link from "../Link";

import styles from "./index.module.scss";

const MainNav = () => {
  return (
    <div className={styles.Wrapper}>
      <nav className={styles.Content}>
        <ul className={styles.Nav}>
          <li className={styles.SocialLink}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/inter.sectAMF/?eid=ARCz9Dd8v7H0sVmpExqGWlooVydmN-jwmlHCfX7u3T0VhLJLElTyAi2KpvTsfZp667nMznov_kcW5sG1"
            >
              <img src="/fb.png" alt="Visit us on Facebook" />
            </a>
          </li>
          <li className={styles.SocialLink}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/inter.sect_amf/"
            >
              <img src="/ig.png" alt="Visit us on Facebook" />
            </a>
          </li>
        </ul>
        {/* <img
          alt="Dropaganda Productions Presents"
          className={styles.Dropaganda}
          src="dropaganda.svg"
        /> */}
      </nav>
    </div>
  );
};

export default MainNav;
