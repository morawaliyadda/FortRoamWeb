import React, { useState, useEffect } from "react";
import './Blog.css';
import Posts from "./posts";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image_slider1 from "../../assets/placeImages/amangalla_hotel.jpg";
import image_slider2 from "../../assets/placeImages/galleheritage_hotel.jpg";

function Blog() {
  const [posts, setPosts] = useState([]);


  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);


  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [newUser, setNewUser] = useState({
    email: '',
    name: '',
    password: ''
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:3010/blog');
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  const toggleModal1 = () => {
    setModal1(!modal1);
    setModal2(false); // Ensure modal2 is closed when opening modal1
  };
  
  const toggleModal2 = () => {
    setModal2(!modal2);
    setModal1(false); // Ensure modal1 is closed when opening modal2
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3010/user/login', user)
      .then((response) => {
        console.log(response);
        // Handle success, e.g., redirect user or update state
      })
      .catch(error => {
        console.log(error);
        // Handle error, e.g., display error message to user
      });
  };

  // function handleChange(event) {
  //   const { name, value } = event.target;
  
  //   setUser(prevUsers => {
  //     return { ...prevUsers, [name]: value };
  //   });
  // }
  
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3010/user/signup', newUser)
      .then((response) => {
        console.log(response);
        // Handle success, e.g., redirect user or update state
      })
      .catch(error => {
        console.log(error);
        // Handle error, e.g., display error message to user
      });
  };

  return (
    <div>
      <div>
        <div className="blog-page">
          <h1>The <strong>Blog</strong></h1>
          <Link to="/write">
            <button className="blogwrite-btn">Write Your Own Blog</button>
          </Link>
          <button className="btn" title='Login or Signup' onClick={toggleModal1}>Shop Now</button>
          {/* <button className="btn" title='Login or Signup' onClick={toggleModal1}>Shop Now</button> */}
          <Posts posts={posts} />
        </div>
        <Footer />
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
                <input
  className="login-input"
  onChange={handleChange}
  value={user.email}
  name="email" // Make sure the name attribute is set to "email"
  placeholder="User Email"
  autoComplete='off'
/>
<input
  className="login-input"
  onChange={handleChange}
  value={user.password}
  name="password" // Make sure the name attribute is set to "password"
  placeholder="Password"
  autoComplete='off'
  type="password"
/>

                </div>
                <button onClick={handleLoginSubmit} type="submit" className="submit-btn">Log In</button>
                <p>If you don't have an account</p>
                <button onClick={toggleModal2} type="button" className="login-btn">Sign Up </button>
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
                  <input className="login-input" onChange={handleChange} value={newUser.email}
                    name="email" placeholder="Email Address" autoComplete='off' />
                  <input className="login-input" onChange={handleChange} value={newUser.userName}
                    name="userName" placeholder="User Name" autoComplete='off' />
                  <input className="login-input" onChange={handleChange} value={newUser.password}
                    name="password" placeholder="Password" autoComplete='off' type="password" />
                </div>
                <button onClick={handleSignupSubmit} type="submit" className="submit-btn">Sign Up </button>
                <p>If you already have an account</p>
                <button onClick={toggleModal2} type="button" className="login-btn">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}

export default Blog;
