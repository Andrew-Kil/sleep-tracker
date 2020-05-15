import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { UserContext } from "../../context/Store";

const Profile = () => {
  const { userMeta } = useContext(UserContext);

  const userID = userMeta && userMeta.uid;

  const [profileInfo, setProfileInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        `http://localhost:5000/users/profile/${userID}`
      );
      setProfileInfo(result.data.data[0]);
      setIsLoading(false);
    };
    if (userID) {
      fetchData();
    }
  }, [userID]);

  return (
    <>
      <h1>Profile</h1>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        profileInfo && (
          <div>
            <div>id: {profileInfo.id}</div>
            <div>email: {profileInfo.email}</div>
          </div>
        )
      )}
    </>
  );
};

export default Profile;
