import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInEmail, setLoggedInEmail] = useState('');

  const setLoggedInUser = (email) => {
    setLoggedInEmail(email);
  };

  const handleLogout = () => {
    setLoggedInEmail(''); 
  };

  return (
    <AuthContext.Provider value={{ loggedInEmail, setLoggedInUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
