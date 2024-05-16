import React,{useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Posts from './posts';
import Footer from '../Footer/Footer';
import { UserContext } from '../../userContext';

function MyBlogs() {
    const [posts, setPosts] = useState([]);
    const {currentUser} = useContext(UserContext);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const res = await axios.get('http://localhost:3010/blog');
            const userPosts = res.data.filter(post => post.username === currentUser?.name);
            setPosts(userPosts);
          } catch (error) {
            console.error("Error fetching posts:", error);
          }
        }
        fetchPosts();
      }, []);

  return (
<div>
        <div className="blog-page">
          <h1>My <strong>Blogs</strong></h1>
          <Posts posts={posts} userblog={true}/>
        </div>
        <Footer />
      </div>
  )
}

export default MyBlogs
