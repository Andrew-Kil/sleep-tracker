import React from "react";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SleepLogs from "./components/SleepLogs/SleepLogs";
import DisplayDreamThemes from "./components/DisplayDreamThemes";

import "./App.css";

const App = () => (
  <div className="App">
    <NavBar></NavBar>

    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/sleep-logs" component={SleepLogs}></Route>
      <Route exact path="/dream-themes" component={DisplayDreamThemes}></Route>
    </Switch>
  </div>
);

export default App;
