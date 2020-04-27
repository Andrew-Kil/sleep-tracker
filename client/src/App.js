import React from "react";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SleepLogs from "./components/SleepLogs/SleepLogs";
import DisplayDreamThemes from "./components/DisplayDreamThemes";

import "./App.css";

const App = () => (
  <div className="App">
    <NavBar></NavBar>

    <h1>Sleep Tracker</h1>

    <Switch>
      <Route exact path="/sleep-logs" component={SleepLogs}></Route>
      <Route exact path="/dream-themes" component={DisplayDreamThemes}></Route>
    </Switch>
  </div>
);

export default App;
