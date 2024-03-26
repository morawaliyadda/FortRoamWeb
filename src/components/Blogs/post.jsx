
import './post.css';
import { Link } from 'react-router-dom';

function Post({ post }) {
  
    return (
        <div className="post">
           {post.image && (
                    <img src={`http://localhost:3010/src/images/${post.image}`} alt="Blog" className="post-image" />
                )}
            <div className="postInfo">
                <Link to={`/blog/${post._id}`} className='link'>
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='postDecription'>{post.description}</p>
        </div>
    );
}

export default Post;

