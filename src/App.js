import React from "react";

import { MainNav } from "./components";

import styles from "./App.module.scss";

import { Lineup, Home } from "./screens";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <MainNav />
        <Switch>
          <Route path="/lineup" component={Lineup} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
