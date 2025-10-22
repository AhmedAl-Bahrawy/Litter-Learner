import React from "react";
import "./NavBar.css";
import Logo from "../../../assets/Logo.svg";
import NavButton from "./NavButton/NavButton.jsx";

const Navbar = () => {
  return (
    <div className="NavBar">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo" />
        <span className="logo-text">Litter Learner</span>
      </div>
      <div className="buttons-container">
        <NavButton>Home</NavButton>
        <NavButton>About Us</NavButton>
        <NavButton>Academics</NavButton>
        <NavButton>Admissions</NavButton>
        <NavButton>Student Life</NavButton>
        <NavButton>Contact</NavButton>
      </div>
    </div>
  );
};

export default Navbar;
