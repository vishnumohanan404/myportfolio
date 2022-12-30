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
      position: "Full Stack Developer",
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
        linkName={"View LinkedIn"}
        link={"https://www.linkedin.com/in/vishnu-mohan-470971179/"}
      />
      <div className="about-section-content-row">
        <div className="about-section item">
          <div className="title">My Story</div>
          <div className="content">
            <p>
              My name is Vishnu Mohanan and I am a college dropout turned full
              stack developer. I started working in my current role in 2021,
              during the COVID-19 pandemic. The pandemic situation actually
              motivated me to become more interested in technology and its
              advancements.
            </p>
            <p>
              I have a passion for front end development, as I love the feeling
              of creating visually appealing interfaces and experiences for
              users. I am also interested in UI/UX design, web technologies, and
              mobile app development.
            </p>
            <p>
              I am excited to continue learning and growing in my career as a
              developer, and I am always looking for new challenges and
              opportunities to expand my skillset.
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
