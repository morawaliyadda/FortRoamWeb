import "./CardStyle.css";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import {  FaStar } from "react-icons/fa";

const CardData = (props) => {
    //const location = useLocation();
    //const [ setLiked] = useState(false);
    const [place, setPlace] = useState(null);

    useEffect(() => {
        const getPlace = async () => {
            try {
                const response = await axios.get(`http://localhost:3010/place/review/${props.id}`);
                setPlace(response.data);
            } catch (error) {
                console.error("Error fetching place data:", error);
            }
        };
        getPlace();
    }, [props.id]);



/*
    const toggleLike = () => {
        setLiked(prevLiked => !prevLiked);
    };
*/

    return (
        <div className="card">
            <div className="card-image">
                <img src= {`http://localhost:3010/src/${props.image}`} alt=""/>
            </div>
            <div className="heading-card">
                <h2>{props.heading}</h2>
            </div>

            <p className="location">{props.location}</p>
            <p>{props.description}</p>
            <div className="rating-content">
                {place ? (
                    <>
                        <p>
                            {[...Array(Math.round(place.averageRating))].map((_, index) => (
                                <FaStar key={index} className="star-icon" />
                            ))}
                        </p>
                        <p>
                            {place.averageRating.toFixed(1)}  <strong>rating</strong>  out of {place.totalReviews} reviews
                        </p>

                    </>
                ) : (
                    'Loading...'
                )}
            </div>



            <Link to={`/detail-page/${props.id}`} className='link'>
                <button>View More</button>
            </Link>
        </div>
    );
};

CardData.propTypes = {
    heading: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    averageRating: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    totalReviews: PropTypes.number,
};

export default CardData;