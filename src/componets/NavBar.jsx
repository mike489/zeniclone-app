import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo_spot.webp";

const NavBar = () => {
  return (
    <nav className="bg-transparent p-2  ">
      <a href="/" className="flex items-center">
        <img src={Logo} alt="Logo" className="h-12" />
      </a>
    </nav>
  );
};

export default NavBar;
