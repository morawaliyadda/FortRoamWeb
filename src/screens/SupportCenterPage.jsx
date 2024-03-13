import React from 'react';
import SupportCenter from '../components/SupportCenter/SupportCenter';
import videoAbout from '../assets/sunrise.mp4';
import '../App.css';
import SupportPersonsCards from '../components/SupportPersonsCards/SupportPersonsCards';
import ReviewBox from '../components/Reviewbox/ReviewBox';
import GalleHeritageFoundation from '../assets/GalleHeritageFoundation.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope ,faGlobe } from '@fortawesome/free-solid-svg-icons';



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
                    <img src={GalleHeritageFoundation} alt="Gallery" />
                </div>
                <div className="details-container">
                    <h2>Galle Heritage Foundation</h2>
                    <p>
                        <strong>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            &nbsp; Address
                        </strong>
                        Galle Heritage Foundation, 12 Rampart St, Galle 80000
                    </p>
                    <p>
                        <strong>
                            <FontAwesomeIcon icon={faPhone} />
                            &nbsp; Phone
                        </strong>
                        0912 246 784
                    </p>
                    <p>
                        <strong>
                            <FontAwesomeIcon icon={faEnvelope} />
                            &nbsp; Email
                        </strong>
                        herifo@sltnet.lk
                    </p>
                    <p>
                        <strong>
                            <FontAwesomeIcon icon={faGlobe} />
                            &nbsp; Website
                        </strong>
                        <a href="http://www.galleheritage.gov.lk" target="_blank"> http://www.galleheritage.gov.lk</a>
                    </p>
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
