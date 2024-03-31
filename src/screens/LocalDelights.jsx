import React from "react";
// import { Link } from "react-router-dom";
import "../App.css";
import "../components/CardStyle/CardStyle.css";
import CardData from "../components/CardStyle/CardStyle";
import data from "../components/places/places.jsx"; 



const LocalDelights = () => {

    const groupedPlaces = data.place.reduce((acc, place) => {
        if (place.type === 'commercial') {
            if (!acc[place.subtype]) {
                acc[place.subtype] = [];
            }
            acc[place.subtype].push(place);
        }
        return acc;
    }, {});

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="Categorical-place">
            <h1 className="Categorical-heading">Local <strong>Delights</strong> </h1>
            <div className="Categorical-type">
                {Object.entries(groupedPlaces).map(([subtype, places]) => (
                    <div key={subtype}>
                        <h2 className="subtype">{capitalizeFirstLetter(subtype)}</h2>
                        <div className="choose-item">
                        {places.map((place, index) => (
                                <div key={index}>
                                    <CardData
                                        image={require(`../assets/placeImages/${place.image}`)}
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

export default LocalDelights;
