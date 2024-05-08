import React from "react";
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import axios from 'axios';
import detailImage from '../assets/HotelPhoto/fortprinters.jpg';
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
            <div className="placeDetail">
                <img src={detailImage} />
                <h1>{place.title}</h1>
                <div>
                    <p>{place.description}</p>
                    <p>Galle Fort, also known as the Dutch Fort or the Fort of Galle, is a historic fortification located in the city of Galle on the southwestern coast of Sri Lanka. It is one of the best-preserved colonial-era forts in Asia and has been recognized as a UNESCO World Heritage Site since 1988.
                        Constructed by the Portuguese in the late 16th century and later extensively fortified by the Dutch during the 17th century, Galle Fort has stood as a testament to the island's colonial past. The fort's strategic location made it an important stronghold for various colonial powers during the spice trade era.
                        The architecture of Galle Fort is a blend of European and South Asian styles, reflecting its multicultural history. Within its sturdy ramparts, visitors can explore narrow streets lined with colonial-era buildings, charming cafes, boutiques, art galleries, and museums. The fort's iconic landmarks include the Galle Lighthouse, which offers panoramic views of the Indian Ocean and the fort itself.
                        Today, Galle Fort is not only a major tourist attraction but also a living heritage site where people still reside and work. Its atmospheric streets, well-preserved buildings, and rich history make it a must-visit destination for travelers exploring Sri Lanka's cultural heritage. Additionally, the fort hosts various cultural events, festivals, and exhibitions throughout the year, further adding to its vibrant atmosphere.</p>
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



// import React from "react";
// import data from "../components/places/places.jsx";

// const DetailPage = ({ match }) => {
//     // Extracting place id from URL params
//     const { id } = match.params;
//     // Fetching place details based on the id
//     // For example, you can fetch the details from your data or API
//     const placeDetails = data.place.find(place => place.id === id);

//     return (
//         <div className="detail-page">
//             <h2>{placeDetails.title}</h2>
//             <img src={require(`../assets/placeImages/${placeDetails.image}`)} alt={placeDetails.title} />
//             <p>{placeDetails.description}</p>
//             <p>Location: {placeDetails.street}</p>
//             <p>Review: {placeDetails.review}</p>
//             {/* Add more details as needed */}
//         </div>
//     );
// };

// export default DetailPage;
