import Post from './post';
import './posts.css';

export default function Posts({ posts , userblog}) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p._id} post={p} userblog={userblog}/>
      ))}
    </div>
  );
}
