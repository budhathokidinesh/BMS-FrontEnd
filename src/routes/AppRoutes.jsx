import React from "react";
import {
  HomePage,
  DashboardPage,
  SignUpPage,
  SignInPage,
  ForgotPasswordPage,
} from "../pages/index";
import { Routes, Route } from "react-router-dom";
import { DefaultLayouts } from "../components/layouts/DefaultLayouts";

const AppRoutes = () => {
  return (
    <Routes>
      {/* public pages  */}
      <Route path="/" element={<DefaultLayouts />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      {/* private pages  */}
      <Route path="/user" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;
