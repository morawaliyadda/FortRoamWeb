import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing edit and delete icons from Font Awesome
import './CardInWrite.css';
function CardInWrite({ post }) {
  
    return (
        <div className="card">
           {post.image && (
                    <img src={`http://localhost:3010/src/images/${post.image}`} alt="Blog" className="post-image" />
                )}
            <div className="postInfo">
                <div className="postHeader">
                    <Link to={`/blog/${post._id}`} className='link'>
                        <span className="postTitle">
                            {post.title}
                        </span>
                    </Link>
                    <div className="postActions">
                        {/* Edit Icon */}
                        <Link to={`/edit/${post._id}`} className='editLink'>
                            <FaEdit className="editIcon" />
                        </Link>
                        {/* Delete Icon */}
                        <FaTrash className="deleteIcon"  />
                    </div>
                </div>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='postDecription'>{post.description}</p>
        </div>
    );
}

export default Post;
