import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { UserMetaContext } from "../../context/Store";

const Profile = () => {
  const [userMeta] = useContext(UserMetaContext);

  const userID = userMeta.uid;

  const [profileInfo, setProfileInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log(userID);
      setIsLoading(true);
      const result = await axios(
        `http://localhost:5000/users/profile/${userID}`
      );
      setProfileInfo(result.data.data[0]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

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
