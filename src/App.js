import React from "react";

import { MainNav } from "./components";

import "./App.scss";

import { About, FAQ, Home, Tickets } from "./pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={"App"}>
      <Router>
        <MainNav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/faq" component={FAQ} />
          <Route path="/tickets" component={Tickets} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
