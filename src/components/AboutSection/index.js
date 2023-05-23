import React from "react";
import SectionHeader from "../SectionHeader";
import "./aboutSection.css";
import figma from "../../assets/skills/figma.svg";
import adobexd from "../../assets/skills/adobexd.svg";
import angular from "../../assets/skills/angularjs.svg";
import flutter from "../../assets/skills/flutter.svg";
import react from "../../assets/skills/react.svg";
import js from "../../assets/skills/javascript.svg";

const AboutSection = () => {
  const jobs = [
    {
      startYear: "2021",
      endYear: "Present",
      organization: "Rhombuz.io",
      location: "Seattle, WA",
      position: "Engineer",
    },
  ];
  const skills = [
    {
      skill: "UI/UX",
      desc: "UI/UX designer with a passion for crafting intuitive and visually stunning digital experiences.",
      iconPrefix: [figma, adobexd],
    },
    {
      skill: "Web",
      desc: "My skills in HTML, CSS, and JavaScript allow me to create responsive and interactive websites that meet the needs of my clients and users. ",
      iconPrefix: [js, react, angular],
    },
    {
      skill: "Mobile",
      desc: "My passion for learning and my foundation in these frameworks allow me to create cross-platform mobile applications that deliver a seamless user experience.",
      iconPrefix: [flutter, react],
    },
  ];
  return (
    <div className="about-section-container">
      <SectionHeader
        name={"about"}
        title={"About"}
        icon={"🥷"}
        linkName={"View Profile"}
        link={"https://vishnumohanan.hashnode.dev/"}
      />
      <div className="about-section-content-row">
        <div className="about-section item">
          <div className="title">My Story</div>
          <div className="content">
            <p>
              My journey began in 2021, coinciding with the pandemic. I started
              exploring different facets of software development during that
              time and found myself increasingly hooked by technology and its
              rapid advancements.
            </p>
            <p>
              I began by learning the fundamentals of software development and
              currently, I am deeply focused on the frontend part of software.
              It excites me to be involved in the process of creating visually
              appealing and highly functional interfaces and experiences for
              users.
            </p>
            <p>
              An essential aspect of my work is my unwavering attention to
              detail and adherence to the design process. It is important to me.
            </p>
            <p>
              I am excited to continue learning and growing in my career as a
              developer, and I am always looking for new challenges and
              opportunities to expand my skill set.
            </p>
          </div>
        </div>
        <div className="job-section item">
          <div className="title">Where I've Worked</div>
          <div className="content">
            {jobs.map((item, i) => (
              <div className="jobs" key={i}>
                <div className="years">
                  <span>{item.startYear} </span> - <span> {item.endYear}</span>
                </div>
                <div className="job">
                  <div className="organization">{item.organization}</div>
                  <div className="location">{item.location}</div>
                </div>
                <div className="position">{item.position}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-section ">
          <div className="title">My Skillsets</div>
          <div className="skills-section-row">
            {skills.map((item) => (
              <div className="skill-box">
                <div className="skill">{item.skill}</div>
                <div className="desc">{item.desc}</div>
                <div className="icons">
                  {item.iconPrefix.map((icon, i) => (
                    <img src={icon} key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
