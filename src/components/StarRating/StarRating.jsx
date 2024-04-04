import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = ({ initialRating, reviewCount }) => {
  const [rating, setRating] = useState(initialRating);
  const [name, setName] = useState(""); // State for name input
  const maxStars = 5;

  const handleStarClick = (clickedIndex) => {
    setRating(clickedIndex + 1);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "" && name.trim() !== "") {
      setComments([...comments, { name: name, text: comment, rating: rating }]);
      setComment("");
      setName("");
    }
  };

  return (
    <div className="star-rating">
      <h2>Add Your Review</h2>  
      <div className="comment-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Your Name"
            className="name-input"
          />
          <textarea
            value={comment}
            onChange={handleInputChange}
            placeholder="Write your review here..."
          ></textarea>
          <div>
          {[...Array(maxStars)].map((_, index) => (
            <span
              key={index}
              className="star-icon"
              onClick={() => handleStarClick(index)}
            >
              {index < rating ? (
                <FaStar className="filled-star" />
              ) : (
                <FaRegStar />
              )}
            </span>
          ))}
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="comment-list">
          {comments.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            <ul className="review-list">
              {comments.map((comment, index) => (
                <li key={index} className="review-item">
                  <div className="review-text">
                    <strong>{comment.name}</strong>
                  </div>
                  <div className="star-rating-display">
                    {[...Array(comment.rating)].map((_, index) => (
                      <FaStar key={index} className="star-icon-display filled" />
                    ))}
                  </div>
                  <div className="comment">
                    {comment.text}
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
