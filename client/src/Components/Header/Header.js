import React from "react";
import logo from "../../assets/Images/logo_transparent_white.png";
import { Link } from 'react-router-dom';
import "./Header.scss"

 function Header() {
  return (
    <header className="header">
      <div className="header__imageContainer">
        <Link to="/" className="header__logo"><img  src={logo} alt="brainflix"/></Link>
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
        <div className="header__actions">
          <Link to="/upload" className="header__uploadLink">
          <button className="header__upload">
              <span className="header__upload--text">UPLOAD</span>
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;