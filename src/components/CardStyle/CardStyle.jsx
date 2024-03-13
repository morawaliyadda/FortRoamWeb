import "./CardStyle.css"
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";



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
                <FaHeart
                    className={`heart-icon ${this.state.liked ? 'liked' : ''}`}
                    onClick={this.toggleLike}
                />
                <h2>{this.props.heading}</h2>
                <p className="location">{this.props.location}</p>
                <p>{this.props.description}</p>
                <Link to="/detail-page">
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

};
export default CardData;