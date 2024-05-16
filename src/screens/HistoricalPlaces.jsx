import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/CardStyle/CardStyle.css";
import CardData from "../components/CardStyle/CardStyle";
import Footer from "../components/Footer/Footer";

const HistoricalPlaces = () => {
    const [places, setPlaces] = useState({ place: [] });
    useEffect(() => {
        fetch("http://localhost:3010/place/")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setPlaces({ place: data }); // Ensure data is assigned properly
                } else {
                    console.error("Data fetched is not an array:", data);
                }
            })
            .catch(error => console.error("Error fetching places:", error));
    }, []);

    const groupedPlaces = places.place ? places.place.reduce((acc, place) => {
        if (place.type === 'historical') {
            if (!acc[place.subtype]) {
                acc[place.subtype] = [];
            }
            acc[place.subtype].push(place);
        }
        return acc;
    }, {}) : {};

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) {
            return description;
        } else {
            return description.substring(0, maxLength) + "...";
        }
    };

    const calculateAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) return 0;
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        return totalRating / reviews.length;
    };

    return (
        <div>
        <div className="Categorical-place">
            <h1 className="Categorical-heading">Historical <strong>Places</strong> </h1>
            <div className="Categorical-type">
                {Object.entries(groupedPlaces).map(([subtype, places]) => (
                    <div key={subtype}>
                        <h2 className="subtype">{capitalizeFirstLetter(subtype)}</h2>
                        <div className="choose-item">
                        {places.map((place, index) => (
                                <div key={index}>
                                    <CardData
                                            heading={place.title}
                                            location={place.street}
                                            description={truncateDescription(place.description, 100)}
                                            averageRating={calculateAverageRating(place.reviews)}
                                            id={place._id}
                                        />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default HistoricalPlaces;
