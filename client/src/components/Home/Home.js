import React, { useEffect, useState } from "react";
import firebase from "../../firebase";

import sloth from "../../assets/sloth.png";

const Home = () => {
  let [userMeta, setUserMeta] = useState({});
  let [token, setToken] = useState({});

  useEffect(() => {
    const stopListening = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { email, uid } = user;
        const lastLogin = user.metadata.lastSignInTime;

        setUserMeta({ email, uid, lastLogin });
      } else {
        console.log("user is not logged in");
      }
    });
    return () => {
      stopListening();
    };
  }, []);

  return (
    <>
      <h1>Sleep Tracker</h1>
      {!userMeta.email ? (
        <h3> Please log in </h3>
      ) : (
        <>
          <h2>Welcome, {userMeta.email}</h2>
          {/* <h4>Your ID is: {userMeta.uid}</h4>
          <h4>You last signed in: {userMeta.lastLogin}</h4>
          <button onClick={handleUnprotectedAPI}>
            Unprotected API Invokation
          </button>
          <button onClick={handleProtectedAPI}>Protected API</button> */}
        </>
      )}
      <img src={sloth} alt="" />
    </>
  );
};

export default Home;
