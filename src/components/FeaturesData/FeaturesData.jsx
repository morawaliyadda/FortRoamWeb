import "./FeatureData.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
<<<<<<< Updated upstream
import { motion } from "framer-motion";
=======
import { motion, useAnimation } from "framer-motion";
>>>>>>> Stashed changes




class FeaturesData extends Component {
<<<<<<< Updated upstream
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
=======
    render() 
    {const variant ={
        visible: {scale: 1, opacity: 1},
        hidden: {scale: 0, opacity: 0} 
      }

      const descriptionVariant = {
        visible: { opacity: 1, x:0 ,y: 0 },
        hidden: { opacity: 0,x:-600, y:0},
      };

       

      const transitionTime = {
        duration: 1.2,
        ease: "easeInOut",



      };
      
>>>>>>> Stashed changes

        return (
            <div className={this.props.className}>

                <motion.div className="des-text"
<<<<<<< Updated upstream
                  variants={descriptionVariant}
                  initial="hidden"
                  whileInView="visible">
=======
                 variants={descriptionVariant}
                 initial="hidden"
                 whileInView="visible">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                        <motion.img src={image} 
=======
                        <motion.img 
                        src={image}
>>>>>>> Stashed changes
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