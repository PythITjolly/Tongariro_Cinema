import React from "react";
import logo from "./../Pictures/TongariroLogo.png";
import "./../Styles/Header.css";

const Header = () => {
  return (
    <div className="cinema-Header">
      <div className="left">
        <a href="/">
          <img className=' logo' src={logo} alt="Tongariro Cinema Logo" />
        </a>
      </div>

      <br />
    </div>
  );
};

export default Header;