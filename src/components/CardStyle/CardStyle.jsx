import "./CardStyle.css"
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class CardData extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src={this.props.image} alt="" />
                </div>
                <h2>{this.props.heading}</h2>
                <p>{this.props.description}</p>
                <Link to="/detail-page">
                    <button>Read More</button>
                </Link>


            </div>
        );
    }
}
CardData.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,

};
export default CardData;