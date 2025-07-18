import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);

  const login = (name) => {
    setUserName(name);
  };

  const logout = () => {
    setUserName(null);
  };

  return (
    <UserContext.Provider value={{ userName, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};