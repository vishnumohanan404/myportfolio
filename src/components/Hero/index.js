import React from "react";
import "./hero.css";
import BgAnimation from "../BackgrooundAnimation/BackgroundAnimation";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-section left">
        <div className="section-icon">👋</div>
        <div className="section-title">Hello, I am Vishnu Mohanan</div>
        <div className="section-desc">
          I am a <span>hobbyist programmer</span>, primarily focused on building
          and talking about UI/UX<span>s</span>.
        </div>
      </div>
      <div className="hero-section right">
        <BgAnimation />
      </div>
    </div>
  );
};

export default Hero;
