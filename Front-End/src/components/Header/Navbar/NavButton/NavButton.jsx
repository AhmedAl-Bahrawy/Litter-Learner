import React from "react";
import "./NavButton.css";

const NavButton = (props) => {
  return (
    <>
      <button className="NavButton">
        {props.children ? props.children : "Button"}
      </button>
    </>
  );
};

export default NavButton;
