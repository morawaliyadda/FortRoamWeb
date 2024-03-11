import React, { useState } from "react";
import "./navBar.css";
import AppLogo from "../../assets/App-Logo.png";
import {
  FaHeart,
  FaUser,
  FaHome,
  FaInfoCircle,
  FaLandmark,
} from "react-icons/fa";

function NavBar() {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");
  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggle")
      : setToggleIcon("nav-toggler");
  };

  return (
    <nav className="nav">
      <div className="applogo">
        <img src={AppLogo} alt=" " height="40" width="40" />
        <a href="/" className="nav-brand">
          FortRoam
        </a>
      </div>
      
      

      <ul className={active}>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <FaHome />
            Home
          </a>
        </li>

        <li className="nav-item">
          <a href="/favourites" className="nav-link">
            <FaHeart />
            Favourites
          </a>
        </li>
    
        <li className="nav-item">
          <a href="/about" className="nav-link">
            <FaInfoCircle />
            About
          </a>
        </li>
        <li className="nav-item">
<<<<<<< Updated upstream
          <a href="/SupportCenter" className="nav-link">
            <FaUser />
            Support Center
          </a>
        </li>
=======
          <a href="/supportcenter" className="nav-link">
            <FaUser />
            Support Center
          </a>
        </li> 
        <li className="nav-item">
          <a href="/location" className="nav-link">
            <FaLandmark/>
            Location
          </a>
        </li> 
>>>>>>> Stashed changes
      </ul>
      <div className="search-bar">
      <SearchBar />
      </div>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
