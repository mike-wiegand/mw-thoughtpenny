import React from "react";
import logo from "../../assets/Images/logo_transparent_navy.png";
import userIcon from "../../assets/Images/marcus-aurelius-bust-of-the-roman-emperor-removebg-preview.png"
import { Link } from 'react-router-dom';
import "./Header.scss"

 function Header() {
  return (
    <header className="header">
      <div className="header__imageContainer">
        <Link to="/" className="header__logo"><img className="header__logoImg" src={logo} alt="brainflix"/></Link>
      </div>
      <div className="header__interact">
        <div className="header__search--container">
          <input
            placeholder="Search"
            type="text"
            name="search"
            id=""
            className="header__search"
          />
          <div className="header__search--icon"></div>
        </div>
        <div className="header__userProfile">
          <img className="header__userIcon" src={userIcon} alt="User Icon"/>
        </div>
      </div>
    </header>
  );
}

export default Header;