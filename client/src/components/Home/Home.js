import React from "react";
import Link from "@material-ui/core/Link";
import sloth from "../../assets/sloth.png";

const Home = (props) => {
  return (
    <>
      <h1>Sleep Tracker</h1>
      {!props.userMeta.email ? (
        <div>
          Please{" "}
          <Link href="auth/login" variant="body2">
            log in
          </Link>{" "}
          or{" "}
          <Link href="auth/signup" variant="body2">
            sign up
          </Link>
        </div>
      ) : (
        <>
          <h2>Welcome, {props.userMeta.email}</h2>
          <h4>You last signed in: {props.userMeta.lastLogin}</h4>
        </>
      )}
      <img
        src={sloth}
        alt=""
        style={{ maxWidth: "500px", width: "100%", height: "auto" }}
      />
    </>
  );
};

export default Home;
