import React, { useState } from "react";
import "./navBar.css";
import AppLogo from "../../assets/App-Logo.png";
import { FaHeart, FaUser, FaHome, FaInfoCircle } from "react-icons/fa";
import SearchBar from "../searchBar/search";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image_slider1 from "../../assets/placeImages/amangalla_hotel.jpg";
import image_slider2 from "../../assets/placeImages/galleheritage_hotel.jpg";
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

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const toggleModal1 = () => {
    setModal1(!modal1);

  };
  const toggleModal2 = () => {
    setModal1(!modal1)
    setModal2(!modal2);

  };

  const[user, setUser] = useState({
    userName: '',
    password: ''
})

function handleChange(event) {
    const {name,value} = event.target;

    setUser(prevUsers => {
        return{...prevUsers, [name]: value};
    });
}

const handleLoginSubmit = (event) => {
    axios
        .post('http://localhost:3001/user/login', user)
       
        
};

const[newUser, setNewUser] = useState({
    email:'',
    userName: '',
    password: ''
})

function handleChange1(event) {
    const {name,value} = event.target;
    setNewUser(prevUsers => {
        return{...prevUsers, [name]: value};
    });
}

const handleSignupSubmit = (event) => {
    // event.preventDefault();
    axios
        .post('http://localhost:3001/user/signup', newUser)
        
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
          <a className="nav-link" href="/blog">
            <FaUser />
            Blog
          </a>
        </li>


        <div className="search-bar">
          <SearchBar />
        </div>
        <button className="btn" title='Login or Signup' onClick={toggleModal1}>Shop Now</button>

      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      {modal1 && (
        <div className="login-container">
          <div className="overlay"></div>
          <form className="section">
            <div className="login-form">
              <div className="image-container">
              <img className="slider-image" src={image_slider1} alt="Slide 3" />
              </div>
              <div>
                <button className='login-close' onClick={toggleModal1}>
                  <FontAwesomeIcon icon={faClose} />
                </button>

                <h1 className="sub-title">Log In</h1>
                <div>
                  <input className="login-input" onChange={handleChange} value={user.userName}
                    name="userName" placeholder="User Name" autoComplete='off' ></input>
                  <input className="login-input" onChange={handleChange} value={user.password}
                    name="password" placeholder="Password" autoComplete='off' type="password"></input>
                </div>
                <button onClick={handleLoginSubmit} type="submit" class="submit-btn">Log In</button>
                <p>If you don't have an account</p>
                <button onClick={toggleModal2} type="submit-btn" class="login-btn">Sign Up </button>
              </div>

            </div>

          </form>
        </div>
      )}
      {modal2 && (
        <div className="login-container">
          <div className="overlay"></div>
          <form className="section">
            <div className="login-form">
              <div className="image-container">
               
              <img className="slider-image" src={image_slider2} alt="Slide 3" />
              </div>
              <div>
                <button className='login-close' onClick={toggleModal1}>
                  <FontAwesomeIcon icon={faClose} />
                </button>
                <h1 className="sub-title">Sign Up</h1>
                <div >
                  <input className="login-input" onChange={handleChange1} value={newUser.email}
                    name="email" placeholder="Email Address" autoComplete='off' />
                  <input className="login-input" onChange={handleChange1} value={newUser.userName}
                    name="userName" placeholder="User Name" autoComplete='off' />
                  <input className="login-input" onChange={handleChange1} value={newUser.password}
                    name="password" placeholder="Password" autoComplete='off' type="password" />
                </div>
                <button onClick={handleSignupSubmit} type="submit" class="submit-btn-signup">Sign Up </button>
                <p>If you already have an account</p>
                <button onClick={toggleModal2} type="submit-btn" class="login-btn">Sign In</button>

              </div>

            </div>

          </form>
        </div>
      )}

    </nav>
  );
}

export default NavBar;