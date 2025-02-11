import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export const DefaultLayouts = () => {
  return (
    <div>
      {/* Header  */}
      <Header />
      {/* Main body  */}
      <main className="main">
        <Outlet />
      </main>

      {/* Footer  */}
      <Footer />
    </div>
  );
};
