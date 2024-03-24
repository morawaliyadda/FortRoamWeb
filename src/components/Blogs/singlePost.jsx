import { useEffect,useState } from 'react';
import './singlePost.css'
import{useLocation} from 'react-router-dom';
import axios from 'axios';
export default function SinglePost() {
   // const PF = "C:/Users/wijeb/Documents/GitHub/FortRoamWeb-Server/src/images/";
    
    const [blog, setBlog] = useState({});
    const location = useLocation();
   // console.log(location.pathname.split("/")[2]);
    const path = location.pathname.split("/")[2];

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:3010/blog/${path}`);
            setBlog(res.data);
        }
        getPost();
    }, [path]);
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
            {/* {blog.image && <img className="postImg" src={PF + blog.image} alt="" />} */}
            {blog.image && (
                    <img src={`http://localhost:3010/src/images/${blog.image}`} alt="Blog" className="singlePostImg" />
                )}
                <h1 className="singlePostTitle">
                    {blog.title} 
                    <div className="singlePostEdit">

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
    );
}