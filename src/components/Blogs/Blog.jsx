import React, { useState, useEffect, useContext } from "react";
import './Blog.css';
import Posts from "./posts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image_slider from "../../assets/App-Logo.png";
import { UserContext } from "../../userContext";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const navigate = useNavigate();
  const {setCurrentUser} = useContext(UserContext);
  const {currentUser} = useContext(UserContext);

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
        const res = await axios.get('https://fortroam-server.onrender.com/blog');
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  const toggleModal1 = () => {
    setModal1(!modal1);
    setModal2(false);
  };
  
  const toggleModal2 = () => {
    setModal2(!modal2);
    setModal1(false); 
  };

  const toggleModal3 = () => {
    setModal3(!modal3);
  };
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };
  
  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setNewUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    axios.post('https://fortroam-server.onrender.com/user/login', user)
      .then((response) => {
        if (response.data.message === "Success") {
          setCurrentUser(response.data.data);
          navigate('/write');
        } else {
          console.log(response.data.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleLoginSubmit2 = (event) => {
    event.preventDefault();
    axios.post('https://fortroam-server.onrender.com/user/login', user)
      .then((response) => {
        if (response.data.message === "Success") {
          setCurrentUser(response.data.data);
          navigate('/myblogs');
        } else {
          console.log(response.data.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    axios.post('https://fortroam-server.onrender.com/user/signup', newUser)
      .then((response) => {
        if (response.status === 201) {
          setCurrentUser(newUser);
          navigate('/write');  
        } else {
          console.log(response.data.message);
        }

      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div className="blog-page">
          <h1>The <strong>Blog</strong></h1>
            {
              currentUser ? (
                <div class="blog-btn">
                  <button className="blogwrite-btn" onClick={() => navigate('/write')}>Write Your Blog</button>
                  <button className="blogwrite-btn" onClick={() => navigate('/myblogs')}>My Blogs</button>
                </div>
              ) : (
                <div class='blog-btn'>
                  <button className="blogwrite-btn" onClick={toggleModal1}>Write Your Blog</button>
                  <button className="blogwrite-btn" onClick={toggleModal3}>My Blogs</button>
                </div>
              )
            }
          <Posts posts={posts} userblog={false}/>
        </div>
        <Footer />
      </div>

      {modal1 && (
        <div className="login-container">
          <div className="overlay"></div>
          <form className="section">
            <div className="login-form">
              <div className="image-container">
                <img className="slider-image" src={image_slider} alt="Slide 3" />
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
                    name="email" 
                    placeholder="User Email"
                    autoComplete='off'
                  />
                  <input
                    className="login-input"
                    onChange={handleChange}
                    value={user.password}
                    name="password" 
                    placeholder="Password"
                    autoComplete='off'
                    type="password"
                  />
                </div>
                <button onClick={handleLoginSubmit} type="submit" className="login-btn">Log In</button>
                <p>If you don't have an account</p>
                <button onClick={toggleModal2} type="button" className="submit-btn">Sign Up </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {modal3 && (
        <div className="login-container">
          <div className="overlay"></div>
          <form className="section">
            <div className="login-form">
              <div className="image-container">
                <img className="slider-image" src={image_slider} alt="Slide 3" />
              </div>
              <div>
                <button className='login-close' onClick={toggleModal3}>
                  <FontAwesomeIcon icon={faClose} />
                </button>
                <h1 className="sub-title">Log In</h1>
                <div>
                  <input
                    className="login-input"
                    onChange={handleChange}
                    value={user.email}
                    name="email" 
                    placeholder="User Email"
                    autoComplete='off'
                  />
                  <input
                    className="login-input"
                    onChange={handleChange}
                    value={user.password}
                    name="password" 
                    placeholder="Password"
                    autoComplete='off'
                    type="password"
                  />
                </div>
                <button onClick={handleLoginSubmit2} type="submit" className="submit-btn">Log In</button>
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
                <img className="slider-image" src={image_slider} alt="Slide 3" />
              </div>
              <div>
                <button className='login-close' onClick={toggleModal2}>
                  <FontAwesomeIcon icon={faClose} />
                </button>
                <h1 className="sub-title">Sign Up</h1>
                <div >
                  <input className="login-input" onChange={handleChange2} value={newUser.email}
                    name="email" placeholder="Email Address" autoComplete='off' />
                  <input className="login-input" onChange={handleChange2} value={newUser.userName}
                    name="name" placeholder="User Name" autoComplete='off' />
                  <input className="login-input" onChange={handleChange2} value={newUser.password}
                    name="password" placeholder="Password" autoComplete='off' type="password" />
                </div>
                <button onClick={handleSignupSubmit} type="submit" className="submit-btn">Sign Up </button>
              </div>
            </div>
          </form>
        </div>
      )}

      
    </div>
  );
}

export default Blog;
