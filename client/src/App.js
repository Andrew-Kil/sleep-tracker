import React, { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import PublicSleepLogs from "./components/SleepLogs/PublicSleepLogs";
import SleepLogs from "./components/SleepLogs/SleepLogs";
import SleepLogsForm from "./components/SleepLogs/SleepLogsForm";
import DisplayDreamThemes from "./components/DreamThemes/DisplayDreamThemes";
import Profile from "./components/Profile/Profile";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";
import firebase from "./firebase";
import { UserAuthContext } from "./context/UserAuthProvider";
import "./App.css";

const App = () => {
  const { setUserMeta } = useContext(UserAuthContext);

  useEffect(() => {
    const stopListening = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { email, uid } = user;
        const lastLogin = user.metadata.lastSignInTime;
        setUserMeta({ email, uid, lastLogin });
      } else {
        console.log("User is not logged in");
      }
    });
    return () => {
      stopListening();
    };
  }, [setUserMeta]);

  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/sleep-logs" component={SleepLogs}></Route>
        <Route exact path="/sleep-logs/form" component={SleepLogsForm}></Route>
        <Route
          exact
          path="/sleep-logs/public"
          component={PublicSleepLogs}></Route>
        <Route
          exact
          path="/dream-themes"
          component={DisplayDreamThemes}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/auth/login" component={Login}></Route>
        <Route exact path="/auth/signup" component={SignUp}></Route>
      </Switch>
    </div>
  );
};

export default App;
