import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUsers, getCurrentUser, setCurrentUser, initializeStorage } from "../utils/storage";

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    initializeStorage();
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const login = (email, password) => {
    const users = getUsers();
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      setUser(foundUser);
      setCurrentUser(foundUser);
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    setCurrentUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: user !== null,
    isAdmin: user?.role === 'admin',
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
