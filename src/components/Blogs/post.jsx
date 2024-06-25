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

    console.log("Post data:", post); // Log the entire post object
    console.log("Post createdAt:", post.createdAt); // Log the createdAt value

    // Check if createdAt is valid and a date
    let formattedDate = 'Invalid Date';
    if (post.createdAt) {
        const postDate = new Date(post.createdAt);
        if (!isNaN(postDate.getTime())) {
            formattedDate = postDate.toDateString();
        } else {
            console.error("Invalid date format:", post.createdAt);
        }
    }

    return (
        <div className="post">

                <img src={post.image} alt="Blog" className="post-image" />
            
            <div className='writeten-content'>
                <div className="postInfo">
                    {userblog ? <Link to={`/myblogs/${post._id}`} className='link'>                        <span className="postTitle">
                            {truncatedTitle}
                        </span></Link> 
                    : <Link to={`/blog/${post._id}`} className='link'>                        <span className="postTitle">
                            {truncatedTitle}
                        </span></Link>}
                    <hr />
                    <span className="postDate">{new Date(post.createdAt).toDateString()}</span> 
                     {/* <span className="postDate">{formattedDate}</span> */}
                </div>
                <p className='postDescription'>{truncatedDescription}</p>
            </div>
            {userblog ? <Link to={`/myblogs/${post._id}`} className='veiw-more'>View More</Link> 
            : <Link to={`/blog/${post._id}`} className='veiw-more'>View More</Link>}
            
        </div>
    );
}

export default Post;

