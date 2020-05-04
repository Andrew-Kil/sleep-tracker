import React, { useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Auth from "../../utils/Auth";
import Form from "./Form";

const AuthForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const registerUser = async (e) => {
    e.preventDefault();
    await axios.post("/users/new", { username, password });
    Auth.authenticateUser(username);
    await axios.post("/users/login", { username, password });
    await this.props.checkAuthenticateStatus();
    setUsername("");
    setPassword("");
  };

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post("/users/login", { username, password })
      .then(() => {
        Auth.authenticateUser(username);
      })
      .then(() => {
        props.checkAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          username: "",
          password: "",
        });
      });
  };

  return (
    <Switch>
      <Route
        path="/auth/login"
        render={() => {
          return (
            <Form
              username={username}
              password={password}
              isLoggedIn={props.isLoggedIn}
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
              isLoggedIn={props.isLoggedIn}
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
