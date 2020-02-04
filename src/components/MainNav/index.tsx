import React from "react";

import Link from "../Link";

import styles from "./index.module.scss";

const MainNav = () => {
  return (
    <nav className={styles.Wrapper}>
      <img
        alt="Intersect Wordmark"
        className={styles.Dropaganda}
        src="dropaganda.svg"
      />
      <ul className={styles.Nav}>
        <li>
          <Link
          // target="_blank"
          //href="https://dropaganda.tickit.ca/"
          >
            Tickets on sale soon
          </Link>
        </li>
        {/* <li>
          <Link className={styles.Link} to="bridge">
            Bridge
          </Link>
        </li>
        <li>
          <Link className={styles.Link} to="core">
            Core
          </Link>
        </li>
        <li>
          <Link className={styles.Link} to="galley">
            Galley
          </Link>
        </li> */}
        {/* <li>
          <Link className={styles.Link} to="faq">
            FAQ
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default MainNav;
