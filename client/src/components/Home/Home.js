import React from "react";
import sloth from "../../assets/sloth.png";

const Home = (props) => {
  return (
    <>
      <h1>Sleep Tracker</h1>
      {!props.userMeta.email ? (
        <h3>Please log in</h3>
      ) : (
        <>
          <h2>Welcome, {props.userMeta.email}</h2>
          <h4>You last signed in: {props.userMeta.lastLogin}</h4>
        </>
      )}
      <img src={sloth} alt="" />
    </>
  );
};

export default Home;
