import React from "react";
import CardData from "../components/CardStyle/CardStyle.jsx";
import data from "../components/places/places.jsx";

const AllItems = () => {
  return (
    <div className="Categorical-place">
      <h1 className="Categorical-heading">Most Popular Places</h1>
      <div className="type">
        {data.place.map((place, index) => (
          <CardData
            key={index}
            image={require(`../assets/placeImages/${place.image}`)}
            heading={place.title}
            location={place.street}
            description={place.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AllItems;
