import React from "react";
import cx from "classnames";
import ScrollToTop from "react-router-scroll-top";
import { MainNav, Footer } from "./components";
import styles from "./App.module.scss";

import {
  Updates,
  Alyag,
  DarkBubzz,
  Lineup,
  Home,
  Vendors,
  Volunteers,
  Media,
  ThugShells,
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
            <Route exact path="/updates" component={Updates} />
            <Route exact path="/alyag" component={Alyag} />
            <Route exact path="/darkbubzz" component={DarkBubzz} />
            <Route exact path="/creatives" component={Creatives} />
            <Route exact path="/genesaproject" component={GenesaProject} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/thugshells" component={ThugShells} />
            <Route exact path="/lineup" component={Lineup} />
            <Route exact path="/vendors" component={Vendors} />
            <Route exact path="/volunteer" component={Volunteers} />
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
