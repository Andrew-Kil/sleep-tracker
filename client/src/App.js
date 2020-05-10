import React from "react";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import SleepLogs from "./components/SleepLogs/SleepLogs";
import DisplayDreamThemes from "./components/DreamThemes/DisplayDreamThemes";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/sleep-logs" component={SleepLogs}></Route>
        <Route
          exact
          path="/dream-themes"
          component={DisplayDreamThemes}></Route>
        <Route exact path="/auth/login" component={Login}></Route>
        <Route exact path="/auth/signup" component={Signup}></Route>
      </Switch>
    </div>
  );
};

export default App;
