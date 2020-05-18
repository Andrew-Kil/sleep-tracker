import React, { useState, useEffect, createContext } from "react";
import { getFirebaseIdToken } from "../utils/firebaseFunctions";
import firebase from "../firebase";

export const UserAuthContext = createContext(null);

const UserAuthProvider = ({ children }) => {
  const [userMeta, setUserMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  const updateUser = (user) => {
    setLoading(true);
    if (user) {
      const { email, uid } = user;
      const lastLogin = user.metadata.lastSignInTime;
      setUserMeta({ email, uid, lastLogin });
      getFirebaseIdToken().then((token) => {
        setToken(token);
        setLoading(false);
      });
    } else {
      setUserMeta(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(updateUser);
    return unsubscribe;
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <UserAuthContext.Provider value={{ userMeta, setUserMeta, token }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
