import React from "react";
import "../App.css";
import AboutUs from "../components/Aboutcards/Aboutcards";
import ContactUs from "../components/ContactUsBox/ContactUs";
import Footer from "../components/Footer/Footer";


const AboutPage = () => {
    return (
        <div>
            <div className="main-container">
                <h1 className="main-text">About <strong>Us</strong></h1>
                <div >
                    <AboutUs/>
                </div>
            </div>
            <div>
                <ContactUs/>
            </div>
            <Footer/>
        </div>


    );

}

export default AboutPage;