import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // => {
  //   // Check if token exists in localStorage
  //   // return !!localStorage.getItem("token");   //this is method when we don't want to call login function in Login Component
  // });                                              and directly store token there and get directly here by this method

  const login = (token) => {
    localStorage.setItem("token", token); // Store token in localStorage
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false);
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const value = {
    isLoggedIn,
    login,
    logout,
    getToken,
  };

  return (
   <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
    )
};
