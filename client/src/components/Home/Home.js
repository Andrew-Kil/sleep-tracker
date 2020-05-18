import React, { useContext } from "react";
import Link from "@material-ui/core/Link";
import sloth from "../../assets/sloth.png";

import { UserAuthContext } from "../../context/UserAuthProvider";

const Home = () => {
  const { userMeta } = useContext(UserAuthContext);
  return (
    <>
      <h1>Sleep Tracker</h1>
      {!userMeta ? (
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
          <h2>Welcome, {userMeta.email}</h2>
          <h4>You last signed in: {userMeta.lastLogin}</h4>
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
