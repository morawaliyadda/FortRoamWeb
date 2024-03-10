import React from 'react';
import SupportCenter from '../components/SupportCenter/SupportCenter';
import videoAbout from '../assets/sunrise.mp4';
import '../App.css';
import SupportPersonsCards from '../components/SupportPersonsCards/SupportPersonsCards';
import ReviewBox from '../components/Reviewbox/ReviewBox';
import imagenew from '../assets/image2.png';


const SupportCenterPage = () => {

    return (
        <div>
            <div className='main-video-about'>
                <video className="video-bg-about" autoPlay loop muted>
                    <source src={videoAbout} type="video/mp4" />
                </video>
                <h1 className="image-text">Support Center</h1>
            </div>
            <SupportCenter />
            <div className="contact-container">
                <div className="contact-image-container">
                    <img src={imagenew} alt="Gallery" className="gallery-image" />
                </div>
                <div className="details-container">
                    <h2>Galle Heritage Foundation</h2>
                    <p>Address: No. 123, Galle Fort, Galle, Sri Lanka</p>
                    <p>Phone: +94 112 345 678</p>
                    <p>Email: info@galleheritagefoundation.com</p>
                </div>
            </div>
            <SupportPersonsCards />
            <div className='review-section'>
                <h2 className='Review-section-heading'>Reviews</h2>
                <ReviewBox />
            </div>

        </div>
    );

};
export default SupportCenterPage;
