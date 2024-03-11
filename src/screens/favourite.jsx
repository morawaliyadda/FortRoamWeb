import React, { useState } from "react";
import CardData from "../components/CardStyle/CardStyle";
import data from "../components/places/places.jsx";

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);


  const addToFavorites = (card) => {
    setFavorites([...favorites, card]);
  };

  return (
    <div className="Categorical-place">
      <h1 className="Categorical-heading">Favorites</h1>
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

export default Favourites;
