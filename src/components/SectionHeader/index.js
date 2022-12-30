import React from "react";
import "./sectionHeader.css";
import arrow from "../../assets/icons/arrow.svg";

const SectionHeader = ({ title, icon, link, name, linkName }) => {
  return (
    <div className="section-header-container" id={name}>
      <div className="section-header-content">
        <div className="section-header-icon">{icon}</div>
        <div className="section-header-title">{title}</div>
      </div>
      <div className="section-header-content">
        {linkName && (
          <a className="section-header-link" href={link}>
            {linkName} <img src={arrow} alt="" />
          </a>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
