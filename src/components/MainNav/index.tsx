import React from "react";

import { Link } from "react-router-dom";

import styles from "./index.module.scss";

const MainNav = () => {
  return (
    <nav className={styles.Wrapper}>
      <ul className={styles.Nav}>
        <li>
          <Link className={styles.Link} to="/tickets">
            tickets
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
        <li>
          <Link className={styles.Link} to="faq">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
