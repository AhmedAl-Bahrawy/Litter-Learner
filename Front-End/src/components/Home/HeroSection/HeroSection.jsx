import React from "react";
import "./HeroSection.css";
import HeroImage from "../../../assets/HeroImage.png";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <div className="image-container">
        <img src={HeroImage} alt="Hero" />
      </div>
      <div className="container">
        <div className="sub-container">
          <div className="container">
            <h4>
              Where Young Minds Blossom and{" "}
              <span className="highlite">Dreams Take Flight.</span>
            </h4>
          </div>
          <p>
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
        </div>
        <div className="sub-container">
          <div className="text-container">
            <p className="num">+7000</p>
            <p className="under-num">Students Passed Out</p>
          </div>
          <div className="text-container">
            <p className="num">+37</p>
            <p className="under-num">Awards & Recognitions</p>
          </div>
          <div className="text-container">
            <p className="num">+15</p>
            <p className="under-num">Experience Educators</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
