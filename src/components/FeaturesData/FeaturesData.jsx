import "./FeatureData.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



class FeaturesData extends Component {
    render() {
        return (
            <div className={this.props.className}>

                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>
                        {this.props.description}
                    </p>
                    <div class="read-more-button2">
                        <Link to={this.props.location}>Read More</Link>
                    </div>
                </div>
                <div className="front-page-image">
                    {this.props.images.map((image) => (
                        <img src={image} alt="" />
                    ))}
                </div>
            </div>
        );
    }
}
FeaturesData.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    location: PropTypes.string.isRequired,
};
export default FeaturesData;