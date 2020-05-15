import React, { useState } from "react";

export const UserMetaContext = React.createContext({});

const Store = ({ children }) => {
  const [userMeta, setUserMeta] = useState({});

  return (
    <UserMetaContext.Provider value={[userMeta, setUserMeta]}>
      {children}
    </UserMetaContext.Provider>
  );
};

export default Store;
