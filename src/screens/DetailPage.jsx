import React from "react";
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import axios from 'axios';
import ContactCard from '../components/detailContact/detailContact';
import StarRating from "../components/StarRating/StarRating";
import Footer from "../components/Footer/Footer";

const DetailPage = () => {

    const [place, setPlace] = useState({});
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:3010/place/${path}`);
            setPlace(res.data);
        }
        getPost();
    }, [path]);

    const renderContactDetails = () => {
        if (place.type === 'commercial') {
            return (
                <div className="detail-contact-container">
                    <h2>Contact Us</h2>
                    <div className="detail-contact-cards">
                        <ContactCard
                            title="Phone Number"
                            value="123-456-7890"
                            icon={<FaPhone />}
                        />
                        <ContactCard
                            title="Address"
                            value="123 Main St, City, Country"
                            icon={<FaMapMarkerAlt />}
                        />
                        <ContactCard
                            title="Facebook"
                            value="www.example.com"
                            icon={<FaGlobe />}
                        />
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };


    return (
        <div>
            <div className="placeDetail-image">
                {/* <img src={`http://localhost:3010/src/${place.image}`} /> */}
                <img src={place.image} alt=''/>
            </div>
            <div className="placeDetail">
                <h1>{place.title}</h1>
                <div>
                    <p>{place.description}</p>
                </div>
                {renderContactDetails()}
                <div className="detail-review">
                    <StarRating rating={place.review} />
                </div>
                <div className="view-more-button">
                    <Link to='https://en.wikipedia.org/wiki/Galle_Fort' className="view-more-link">View More Details</Link>
                </div>


            </div>
            <Footer />
        </div>
    );
};

export default DetailPage;


