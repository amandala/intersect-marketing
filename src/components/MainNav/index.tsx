import React from "react";

import { Link } from "react-router-dom";

import "./index.scss";

const MainNav = () => {
  return (
    <nav className={"NavWrapper"}>
      <ul className={"Nav"}>
        <li>
          <a
            className={"NavLink"}
            target="_blank"
            href="https://dropaganda.tickit.ca/"
          >
            buy tickets
          </a>
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
          <Link className={"NavLink"} to="faq">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
