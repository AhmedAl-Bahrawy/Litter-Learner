import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import TopHeader from "./TopHeader/TopHeader.jsx";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <TopHeader />
      <Navbar />
    </div>
  );
};

export default Header;
