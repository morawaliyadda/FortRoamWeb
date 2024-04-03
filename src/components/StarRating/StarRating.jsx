import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = ({ initialRating, reviewCount }) => {
  const [rating, setRating] = useState(initialRating);
  const maxStars = 5;

  const handleStarClick = (clickedIndex) => {
    setRating(clickedIndex + 1);
  };

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, { text: comment, rating: rating }]);
      setComment("");
    }
  };

  return (
    <div className="star-rating">
        <h2>Add a Review</h2>
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className="star-icon"
          onClick={() => handleStarClick(index)}
        >
          {index < rating ? <FaStar /> : <FaRegStar />}
        </span>
      ))}
      <div className="comment-box">
      {/* <h2>Add a Review</h2> */}
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={handleInputChange}
            placeholder="Write your review here..."
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="comment-list">
  {/* <h2>Reviews</h2> */}
  {comments.length === 0 ? (
    <p>No reviews yet.</p>
  ) : (
    <ul className="review-list">
      {comments.map((comment, index) => (
        <li key={index} className="review-item">
          <div className="review-text">{comment.text}</div>
          <div className="star-rating-display">
            {[...Array(comment.rating)].map((_, index) => (
              <FaStar key={index} className="star-icon-display filled" />
            ))}
          </div>
        </li>
      ))}
    </ul>
  )}
</div>

      </div>
    </div>
  );
};

export default StarRating;
