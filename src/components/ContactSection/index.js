import React from "react";
import SectionHeader from "../SectionHeader";
import "./contactSection.css";
const ContactSection = () => {
  return (
    <div className="contact-section-container">
      <SectionHeader
        name={"contact"}
        title={"Contact"}
        icon={"🤙"}
        linkName={"View LinkedIn"}
        link={"https://www.linkedin.com/in/vishnu-mohan-470971179/"}
      />
      <div className="contact-section-row">
        <div className="text">
          <p>
            Are you interested in collaborating or want to connect or chat? If
            so, hit the contact button down below or contact me via LinkedIn.
          </p>
          <div className="contact-buttons">
            <a
              href="mailto:vishnumohan1996nov@gmail.com?subject=Hello"
              className="button"
            >
              Contact Me
            </a>
            <a
              href="https://linktr.ee/vishnumohanan"
              className="button linktree"
            >
              Linktree
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
