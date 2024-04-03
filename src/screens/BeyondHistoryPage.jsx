import React, { useState, useEffect } from "react";
import "../App.css";
import "../components/CardStyle/CardStyle.css";
import CardData from "../components/CardStyle/CardStyle";


const BeyondHistory = () => {
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
        if (place.type === 'activities') {
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

    return (
        <div className="Categorical-place">
            <h1 className="Categorical-heading">Beyond <strong>History</strong></h1>
            <div className="Categorical-type">
                {Object.entries(groupedPlaces).map(([subtype, places]) => (
                    <div key={subtype}>
                        <h2 className="subtype">{capitalizeFirstLetter(subtype)}</h2>
                        <div className="choose-item">
                        {places.map((place, index) => (
                                <div key={index}>
                                    <CardData
                                       // image={require(`../assets/placeImages/${place.image}`)}
                                        heading={place.title}
                                        location= {place.street}
                                        description={place.description}
                                        review ={place.review}
                                        
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BeyondHistory;
