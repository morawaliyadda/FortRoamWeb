import { useEffect, useState } from "react";
import './Blog.css';
import Posts from "./posts";
import axios from "axios";
import Write from "./write";
import { Link, Route, Switch } from "react-router-dom";

function Blog() {
  const[posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:3010/blog');
       // console.log(res.data);
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="blog-page">
      <h1>The <strong>Blog</strong></h1>
      <Link to="/write">
        <button className="blogwrite-btn">Write Your Own Blog</button>
      </Link>
      {/* <button className="blogwrite-btn">login</button> */}
      <Posts posts={posts}/>
      {/* <Posts/> */}
      
    </div>
  );
}

export default Blog;
