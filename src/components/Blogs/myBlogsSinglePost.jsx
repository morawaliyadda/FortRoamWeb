import React, { useState, useEffect, useContext } from 'react';
import './singlePost.css';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Posts from './posts';
import Footer from '../Footer/Footer';
import { Context } from '../../context/Context';

export default function MyBlogsSinglePost() {
    const [blog, setBlog] = useState({});
    const { user } = useContext(Context);
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [allPosts, setAllPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`https://fortroam-server.onrender.com/blog/${path}`);
            setBlog(res.data);
        }
        getPost();
    }, [path]);


    const handleDelete = async () => {
        try {
            await axios.delete(`https://fortroam-server.onrender.com/blog/delete/${blog._id}`);
            navigate('/myblogs', { replace: true });
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div>
            <div className="myBlogSinglePost">
                <div className="myBlogSinglePostWrapper">
                    {blog.imageURL && (
                        <img src={blog.imageURL} alt="Blog" className="singlePostImg" />
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
            </div>
            <Footer />
        </div>
    );
}
