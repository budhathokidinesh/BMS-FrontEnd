import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { AuthRoute } from "../auth/AuthRoute";

export const UserLayout = () => {
  return (
    <AuthRoute>
      {/* Header  */}
      <Header />
      {/* Main body  */}

      <div className="d-flex">
        <div
          className="bg-dark text-white p-3"
          style={{
            width: "200px",
          }}
        >
          <div className="p-3">
            <div>Welcome back</div>
            <h4>Dinesh Budhathoki</h4>
          </div>
          <hr />
          <Sidebar />
        </div>

        {/* this is for main body  */}
        <main className="user-main">
          <Outlet />
        </main>
      </div>

      {/* Footer  */}
      <Footer />
    </AuthRoute>
  );
};
