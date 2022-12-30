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
        linkName={false}
      />
      <div className="contact-section-row">
        <div className="text">
          <p>
            Are you interested in collaborating or want to connect or chat? If
            so, hit the contact button down below or contact me via LinkedIn.
          </p>
          <a
            href="mailto:vishnumohan1996nov@gmail.com?subject=Hello"
            className="button"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
