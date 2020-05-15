import React, { useState, createContext, useMemo } from "react";

export const UserContext = createContext(null);

const Store = ({ children }) => {
  const [userMeta, setUserMeta] = useState(null);

  const value = useMemo(() => ({ userMeta, setUserMeta }), [
    userMeta,
    setUserMeta,
  ]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default Store;
