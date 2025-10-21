import React from "react";
import RightArrow from "../../../assets/RightArrow.svg";
import TopBanner from "../../../assets/TopBanner.svg";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="TopHeader">
      <div className="banner">
        <img src={TopBanner} alt="Top Banner" />
        <div className="admission-notice">
          <p className="text">Admission is Open, Grab your seat now</p>
          <div className="icon">
            <img src={RightArrow} alt="Right Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
