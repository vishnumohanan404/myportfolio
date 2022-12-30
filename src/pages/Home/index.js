import React from "react";
import AboutSection from "../../components/AboutSection";
import ContactSection from "../../components/ContactSection";
import Hero from "../../components/Hero";
import WorkSection from "../../components/WorkSection";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Hero></Hero>
      {/* <WorkSection></WorkSection> */}
      <AboutSection></AboutSection>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
