import React from "react";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  //user real data
  const isAuth = false;
  return isAuth ? children : <Navigate to="/login" />;
};
