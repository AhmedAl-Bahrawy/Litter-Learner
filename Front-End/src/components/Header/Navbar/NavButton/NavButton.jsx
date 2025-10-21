import React from "react";
import "./NavButton.css";

const NavButton = ({ text }) => {
  return (
    <>
      <button className="NavButton">{text ? text : "Button"}</button>
    </>
  );
};

export default NavButton;
