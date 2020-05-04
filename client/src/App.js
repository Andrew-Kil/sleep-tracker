import React, { useState, useEffect } from "react";
import axios from "axios";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import SleepLogs from "./components/SleepLogs/SleepLogs";
import DisplayDreamThemes from "./components/DreamThemes/DisplayDreamThemes";
import AuthForm from "./components/Auth/AuthForm";
import Auth from "./utils/Auth";
import PrivateRoute from "./utils/AuthRouting";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(false);

  const checkAuthenticateStatus = () => {
    axios.get("http://localhost:5000/users/isLoggedIn").then((user) => {
      if (user.data.username === Auth.getToken()) {
        setIsLoggedIn(Auth.isUserAuthenticated());
        setUsername(Auth.getToken());
      } else {
        if (user.data.username) {
          logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
  };

  const logoutUser = () => {
    axios
      .post("http://localhost:5000/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        checkAuthenticateStatus();
      });
  };

  const greeting = isLoggedIn ? (
    <span>
      Welcome {username} {" ~ "}
    </span>
  ) : null;

  const logoutButton = isLoggedIn ? (
    <span>
      <button onClick={logoutUser}>Logout</button> {" ~ "}
    </span>
  ) : null;

  useEffect(() => {
    checkAuthenticateStatus();
  });

  return (
    <div className="App">
      <NavBar></NavBar>
      {greeting}
      {logoutButton}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/sleep-logs" component={SleepLogs}></Route>
        <Route
          exact
          path="/dream-themes"
          component={DisplayDreamThemes}></Route>
        <Route
          path="/auth"
          render={() => {
            return (
              <AuthForm
                checkAuthenticateStatus={checkAuthenticateStatus}
                isLoggedIn={isLoggedIn}
              />
            );
          }}
        />
        <PrivateRoute path="/sleep-logs" component={SleepLogs} />
      </Switch>
    </div>
  );
};

export default App;
