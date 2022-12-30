import React from "react";
import Emoji from "../Emoji";
import "./header.css";

const Header = () => {
  const headerMenuItems = [
    { name: "home", href: "#" },
    // { name: "work", href: "#work" },
    { name: "about", href: "#about" },
    { name: "contact", href: "#contact" },
  ];
  return (
    <div className="header-border-container">
      <div className="header-container">
        <div className="header-logo-container">
          <Emoji symbol="👽" fontSize="2.6rem"></Emoji>
        </div>
        <div className="header-menu-container">
          {headerMenuItems.map((item) => (
            <div className="menu-item">
              <a href={item.href}>{item.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
