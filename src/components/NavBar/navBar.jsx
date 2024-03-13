import React, { useState } from "react";
import "./navBar.css";
import AppLogo from "../../assets/App-Logo.png";
import {
  FaHeart,
  FaUser,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";


function NavBar() {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");
 // const [showLogin, setShowLogin] = useState(false); // State to control the visibility of admin login modal

  const navToggle = () => {
    setActive(active === "nav-menu" ? "nav-menu nav-active" : "nav-menu");
    setToggleIcon(
      toggleIcon === "nav-toggler" ? "nav-toggler toggle" : "nav-toggler"
    );
  };

  const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
  const toggleModal1 = () => {
    setModal1(!modal1);
};
const toggleModal2 = () => {
  setModal1(!modal1)
  setModal2(!modal2);
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
          <a href="/profile" className="nav-link">
            <FaUser />
            Profile
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

      {modal1 && (
            <div className="login-container">
                <div className="overlay"></div>
                <form className='login-form'>
                    <button className='login-close' onClick={toggleModal1}> close
                        <i id="user" className="fas fa-close"></i>
                    </button>
                    <h1 className="sub-title">Log In</h1>
                    <div>
                        <input   className="login-input" 
                        name="userName" placeholder="User Name" autoComplete='off' ></input>
                        <input   className="login-input" 
                        name="password" placeholder="Password" autoComplete='off' type="password"></input>
                    </div>
                    <button  type="submit" class="btn">Log In</button>
                    <p>Don't have an account</p>
                    <button onClick={toggleModal2} type="submit" class="login-btn">Sign In </button>
                </form>
            </div>
        )}
        {modal2 && (
            <div className="login-container">
                <div className="overlay"></div>
                <form className='login-form'>
                <button className='login-close' onClick={toggleModal1}> close
                        <i id="user" className="fas fa-close"></i>
                    </button>
                    <h1 className="sub-title">Sign In</h1>
                    <div className='input-container'>
                        <input   className="login-input"
                         name="email" placeholder="Email Address" autoComplete='off' />
                        <input   className="login-input"
                         name="userName" placeholder="User Name" autoComplete='off' />
                        <input  className="login-input" 
                         name="password" placeholder="Password" autoComplete='off' type="password"/>
                    </div>
                    <button  type="submit" class="btn">Sign In </button>
                </form>
            </div>
        )}
        
    </nav>
  );
}

export default NavBar;