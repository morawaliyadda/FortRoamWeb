import './post.css';
import { Link } from 'react-router-dom';

function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    const truncated = text.substring(0, maxLength).trim();
    return truncated + '...';
}

function Post({ post, userblog }) {
   
    if (!post) {
        return null; 
    }

    const truncatedTitle = truncateText(post.title || '', 30); 
    const truncatedDescription = truncateText(post.description || '', 250); 

    return (
        <div className="post">
            {post.image && (
                <img src={`http://localhost:3010/src/images/${post.image}`} alt="Blog" className="post-image" />
            )}
            <div className='writeten-content'>
                <div className="postInfo">
                    {userblog ? <Link to={`/myblogs/${post._id}`} className='link'>                        <span className="postTitle">
                            {truncatedTitle}
                        </span></Link> 
                    : <Link to={`/blog/${post._id}`} className='link'>                        <span className="postTitle">
                            {truncatedTitle}
                        </span></Link>}
                    <hr />
                    <span className="postDate">{new Date(post.createdAt || '').toDateString()}</span> 
                </div>
                <p className='postDescription'>{truncatedDescription}</p>
            </div>
            {userblog ? <Link to={`/myblogs/${post._id}`} className='veiw-more'>View More</Link> 
            : <Link to={`/blog/${post._id}`} className='veiw-more'>View More</Link>}
            
        </div>
    );
}

export default Post;

