import React from "react";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import AddSleepLogForm from "./components/AddSleepLogForm";
import DisplaySleepLogs from "./components/DisplaySleepLogs";
import DisplayDreamThemes from "./components/DisplayDreamThemes";

import "./App.css";

const App = () => (
  <div className="App">
    <NavBar></NavBar>
    <h1>Sleep Tracker</h1>
    <AddSleepLogForm></AddSleepLogForm>

    <Switch>
      <Route exact path="/sleep-logs" component={DisplaySleepLogs}></Route>
      <Route exact path="/dream-themes" component={DisplayDreamThemes}></Route>
    </Switch>
  </div>
);

export default App;
