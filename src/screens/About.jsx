import React from "react";
import "../App.css";
import image_mission from '../assets/image5.jpg';
import Services from "../components/Services/Services";
import videoAbout from '../assets/sunrise.mp4';


const AboutPage = () => {
    return (
        <div>
            <div className="main-video-about">
                <video className="video-bg-about" autoPlay loop muted>
                    <source src={videoAbout} type="video/mp4" />
                </video>
                <h1 className="image-text">About Us</h1>
                <div className="about-content">
                    <h2>Why You Choose Us</h2>
                    <h3>Galle Fort, located in the southern coast of Sri Lanka, is a UNESCO
                        World Heritage Site renowned for its historical significance,
                        architectural beauty, and cultural charm. Originally built by the
                        Portuguese in the 16th century, it was later fortified by the Dutch
                        during the 17th century, reflecting a blend of European
                        architectural styles.
                    </h3>
                </div>
            </div>

            <div className="mission">
                <div className="mission-text">
                    <div >
                        <h1>Our Mission</h1>
                        <h3>Preserve Galle Fort as a historical cultural center and a place of archeological importance and promoting as an excellent tourist city.
                        </h3>
                    </div>
                    <div className="mission-and-vission">
                        <h1>Our Vission</h1>
                        <h3>The world heritage living city of Galle Fort to be the most excellent cultural tourist destination in Sri Lanka in 2025
                        </h3>
                    </div>
                </div>
            </div>
            <div>
                <Services />
            </div>

        </div>


    );

}

export default AboutPage;