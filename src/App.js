import React from "react";

import { MainNav } from "./components";

import styles from "./App.module.scss";

import {
  About,
  BridgeStage,
  CoreStage,
  FAQ,
  GalleyStage,
  Home,
  Tickets
} from "./screens";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <MainNav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/bridge" component={BridgeStage} />
          <Route path="/core" component={CoreStage} />
          <Route path="/faq" component={FAQ} />
          <Route path="/galley" component={GalleyStage} />
          <Route path="/tickets" component={Tickets} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
