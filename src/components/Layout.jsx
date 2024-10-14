import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>

      <Outlet />

      <footer className="bg-primary text-white text-center py-6">
        <p>© 2022 Engr. Akramul Hoque. All rights reserved.</p>
      </footer>
    </div>
  );
}
