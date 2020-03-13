import React from "react";

import { MainNav, Footer } from "./components";
import styles from "./App.module.scss";

import { Lineup, Home, Vendors, Volunteers, Media } from "./screens";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <MainNav />
        <Switch>
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
