import "./CardStyle.css"
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";



class CardData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
        this.toggleLike = this.toggleLike.bind(this);
    }

    toggleLike() {
        this.setState(prevState => ({
            liked: !prevState.liked
        }));
    }

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src={this.props.image} alt="" />
                </div>
                <div className="heading-card">
                    <h2>{this.props.heading}</h2>
                    <FaHeart
                        className={`heart-icon ${this.state.liked ? 'liked' : ''}`}
                        onClick={this.toggleLike}
                    />

                </div>

                <p className="location">{this.props.location}</p>
                <p>{this.props.description}</p>
                <p>
                    Review :<FaStar className="star-icon" /> {this.props.review}
                </p>

                {/* <Link to={`/detail-page/${this.props.id}`}>
                    <button>View More</button>
                </Link> */}
                <Link to={`/detail-page`}>
                    <button>View More</button>
                </Link>
            </div>
        );
    }
}
CardData.propTypes = {
    heading: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
   images: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,

};
export default CardData;