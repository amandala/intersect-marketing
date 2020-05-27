import React from "react";
import cx from "classnames";
import ScrollToTop from "react-router-scroll-top";
import { MainNav, Footer } from "./components";
import styles from "./App.module.scss";

import {
  Alyag,
  Lineup,
  Home,
  Vendors,
  Volunteers,
  Media,
  Creatives,
  GenesaProject,
  Whisper,
} from "./screens";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <div className={cx(styles.App, { [styles.AppFrozen]: mobileNavOpen })}>
      <Router>
        <ScrollToTop>
          <MainNav
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
          />
          <Switch>
            <Route path="/alyag" component={Alyag} />
            <Route path="/creatives" component={Creatives} />
            <Route path="/genesaproject" component={GenesaProject} />
            <Route path="/media" component={Media} />
            <Route path="/lineup" component={Lineup} />
            <Route path="/vendors" component={Vendors} />
            <Route path="/volunteer" component={Volunteers} />
            <Route exact path="/whisper" component={Whisper} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
