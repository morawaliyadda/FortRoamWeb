import React, { useState } from "react";
import "./navBar.css";
import AppLogo from "../../assets/App-Logo.png";
import { FaHeart, FaUser, FaHome, FaInfoCircle } from "react-icons/fa";
import SearchBar from "../searchBar/search";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image_slider1 from "../../assets/images/placeImages/amangalla_hotel.jpg";
import image_slider2 from "../../assets/images/placeImages/galleheritage_hotel.jpg";
import axios from 'axios';

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
          <a className="nav-link" href="/blog">
            <FaUser />
            Blog
          </a>
        </li>

        <li className="nav-item">
          <a href="/about" className="nav-link">
            <FaInfoCircle />
            About
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