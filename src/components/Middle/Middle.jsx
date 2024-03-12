import React from "react";
import './Middle.css';
import { motion } from "framer-motion";


const Middle = () => {
      
    const variant ={
        visible: {scale: 1, opacity: 1},
        hidden: {scale: 0, opacity: 0} 
      }

      const transitionTime = {
        duration: 0.6,
        ease: "easeInOut",
      };



    return (
        <motion.div className="middle-section"
        variants={variant}
        initial="hidden"
        whileInView="visible"
        transition={transitionTime}
        >
            <div className="secContainer Container">
                <div className="grid">
                    <span className="flex">
                        <h1>10</h1>
                        <p>World of Experiences</p>
                    </span>

                    <span className="flex">
                        <h1>2K+</h1>
                        <p>Fine Destinations</p>
                    </span>

                    <span className="flex">
                        <h1>10K+</h1>
                        <p>Customer Reviews</p>
                    </span>

                    <span className="flex">
                        <h1>4.8</h1>
                        <p>Overall Rating</p>
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
export default Middle;
