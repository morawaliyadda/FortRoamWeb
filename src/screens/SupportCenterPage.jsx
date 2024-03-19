import React from 'react';
import SupportCenter from '../components/SupportCenter/SupportCenter';
import videoAbout from '../assets/sunrise.mp4';
import '../App.css';
import SupportPersonsCards from '../components/SupportPersonsCards/SupportPersonsCards';
import ReviewBox from '../components/Reviewbox/ReviewBox';
import ContactUs from '../components/ContactUsBox/ContactUs';



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
            
            <SupportPersonsCards />
            <ContactUs/>
            <div className='review-section'>
                <h2 className='Review-section-heading'>Reviews</h2>
                <ReviewBox />
            </div>
            

        </div>
    );

};
export default SupportCenterPage;
