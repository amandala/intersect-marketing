import React from "react";
import styles from "./App.module.scss";

import { FAQ, Home, Tickets } from "./screens";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
