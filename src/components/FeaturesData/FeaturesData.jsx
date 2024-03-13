import "./FeatureData.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";




class FeaturesData extends Component {
    render() {
       
        const variant ={
            visible: {scale: 1, opacity: 1},
            hidden: {scale: 0, opacity: 0} 
          }
    
          const descriptionVariant = {
            visible: { opacity: 1, x:0 ,y: 0 },
            hidden: { opacity: 0,x:-400, y:0},
          };
    
           
    
          const transitionTime = {
            duration: 1.2,
            ease: "easeInOut",
    
    
    
          };

        return (
            <div className={this.props.className}>

                <motion.div className="des-text"
                  variants={descriptionVariant}
                  initial="hidden"
                  whileInView="visible">
                    <h2>{this.props.heading}</h2>
                    <p>
                        {this.props.description}
                    </p>
                    <div class="read-more-button2">
                        <Link to={this.props.location}>Read More</Link>
                    </div>
                </motion.div>
                <div className="front-page-image">
                    {this.props.images.map((image) => (
                        <motion.img src={image} 
                        variants={variant}
                        initial="hidden"
                        whileInView="visible"
                        transition={transitionTime}
                        alt="" />
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