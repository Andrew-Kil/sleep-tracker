import React, { useState } from "react";
import axios from "axios";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "../../utils/Auth";
import Form from "./Form";

const AuthForm = (props) => {
  const { checkAuthenticateStatus, isLoggedIn } = props;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const registerUser = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/users/new", { username, password });
    Auth.authenticateUser(username);
    await axios.post("http://localhost:5000/users/login", {
      username,
      password,
    });
    await checkAuthenticateStatus();
    setUsername("");
    setPassword("");
  };

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/login", { username, password })
      .then(() => {
        Auth.authenticateUser(username);
      })
      .then(() => {
        debugger;
      })
      .then(() => {
        checkAuthenticateStatus();
      })
      .then(() => {
        setUsername("");
        setPassword("");
        setIsSubmitted(true);
      });
  };

  return (
    <Switch>
      {isSubmitted && <Redirect to={"/sleep-logs"} />}
      <Route
        path="/auth/login"
        render={() => {
          return (
            <Form
              username={username}
              password={password}
              isLoggedIn={isLoggedIn}
              loginUser={loginUser}
              registerUser={registerUser}
              handleUsernameChange={handleUsernameChange}
              handlePasswordChange={handlePasswordChange}
            />
          );
        }}
      />
      <Route
        path="/auth/register"
        render={() => {
          return (
            <Form
              username={username}
              password={password}
              isLoggedIn={isLoggedIn}
              loginUser={loginUser}
              registerUser={registerUser}
              handleUsernameChange={handleUsernameChange}
              handlePasswordChange={handlePasswordChange}
            />
          );
        }}
      />
    </Switch>
  );
};

export default AuthForm;
