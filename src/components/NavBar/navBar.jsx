import React, { useState } from "react";
import "./navBar.css";
import AppLogo from "../../assets/App-Logo.png";
import {  FaUser, FaHome, FaInfoCircle } from "react-icons/fa";
import SearchBar from "../searchBar/search";


function NavBar() {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");
 
  const navToggle = () => {
    setActive(active === "nav-menu" ? "nav-menu nav-active" : "nav-menu");
    setToggleIcon(
      toggleIcon === "nav-toggler" ? "nav-toggler toggle" : "nav-toggler"
    );
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
          <a href="/about" className="nav-link">
            <FaInfoCircle />
            About
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/blog">
            <FaUser />
            Blog
          </a>
        </li>


        <div className="search-bar">
          <SearchBar />
        </div>
        
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
           
    </nav>
  );
}

export default NavBar;