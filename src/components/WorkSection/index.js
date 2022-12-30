import React from "react";
import SectionHeader from "../SectionHeader";
import "./workSection.css";

const WorkSection = () => {
  return (
    <div className="work-section-container">
      <SectionHeader
        name={"work"}
        title={"Selected Works"}
        icon={"✍️"}
        linkName={"View Github"}
        link={"https://github.com/KingKong26"}
      />
      <div className="work-section-grid-container">
        <div className="grid-item one">
          <div></div>
        </div>
        <div className="grid-item two"></div>
        <div className="grid-item three"></div>
        <div className="grid-item four"></div>
      </div>
    </div>
  );
};

export default WorkSection;
