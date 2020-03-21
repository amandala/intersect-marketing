import React from "react";
import cx from "classnames";
import { MainNav, Footer } from "./components";
import styles from "./App.module.scss";

import { Lineup, Home, Vendors, Volunteers, Media, Creatives } from "./screens";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <div className={cx(styles.App, { [styles.AppFrozen]: mobileNavOpen })}>
      <Router>
        <MainNav
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />
        <Switch>
          <Route path="/creatives" component={Creatives} />
          <Route path="/lineup" component={Lineup} />
          <Route path="/media" component={Media} />
          <Route path="/vendors" component={Vendors} />
          <Route path="/volunteer" component={Volunteers} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
