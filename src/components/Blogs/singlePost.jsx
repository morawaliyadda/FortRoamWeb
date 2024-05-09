import React, { useState, useEffect, useContext } from 'react';
import './singlePost.css';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Posts from './posts';
import Footer from '../Footer/Footer';
import { Context } from '../../context/Context';

export default function SinglePost() {
    const [blog, setBlog] = useState({});
    const { user } = useContext(Context);
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [allPosts, setAllPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:3010/blog/${path}`);
            setBlog(res.data);
        }
        getPost();
    }, [path]);

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const res = await axios.get('http://localhost:3010/blog');
                setAllPosts(res.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchAllPosts();
    }, []);

    const recentPosts = allPosts.slice(0, 3);

    const handleDelete = async () => {
        const deleteBlog = { username: "user.username" };
        try {
            await axios.delete(`http://localhost:3010/blog/delete/${blog._id}`, { data: deleteBlog });
            window.location.replace('/blog');
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div>
            <div className="singlePost">
                <div className="singlePostWrapper">
                    {blog.image && (
                        <img src={`http://localhost:3010/src/images/${blog.image}`} alt="Blog" className="singlePostImg" />
                    )}
                    <h1 className="singlePostTitle">
                        {blog.title}
                        <div className="singlePostEditndlt">
                            <Link to={`/write/${blog._id}`}>
                                <FaEdit className="editIcon" />
                            </Link>
                            <FaTrash className="deleteIcon" onClick={handleDelete} />
                        </div>
                    </h1>

                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">
                            Author: <b>{blog.username}</b>
                        </span>
                        <span className="singlePostDate">{new Date(blog.createdAt).toDateString()}</span>

                    </div>
                    <p className="singlePostDesc">{blog.description}</p>
                </div>
                <div className="recentPostsContainer">
                    <h2>Recent Posts</h2>
                    <Posts posts={recentPosts} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
