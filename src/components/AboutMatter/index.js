import React from "react";
import "./style.css";
import Information from "./Information";
import SectionTitle from "../SectionTitle";
export const AboutMatter = () => {
  return (
    <>
    <SectionTitle title="About Matter"></SectionTitle>
      <div className="about-wrapper">
        <div className="about-photo">
          <img className="photo" src="./assets/images/about.png" alt="" />
        </div>
        <div className="right-side">
          <Information/>
        </div>
      </div>
    </>
  );
};

export default AboutMatter;
