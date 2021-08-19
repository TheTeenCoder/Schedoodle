import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "./styles/tailwind.css";
import Home from "./routes/Home";
import Schedules from "./routes/Schedules";
import "tippy.js/dist/tippy.css";

import ThemeWrapper from "./components/ThemeWrapper";
function App() {
  return (
    <ThemeWrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/app">
            <Schedules />
          </Route>
          {/* <Route path="/app/:id">
            <Schedules />
          </Route> */}
        </Switch>
      </Router>
    </ThemeWrapper>
  );
}

export default App;
