import React from "react";
import CardData from "../components/CardStyle/CardStyle";
import data from "../components/places/places.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Favourites = () => {
  
  return (
    <div >
      <h1 className="Categorical-heading">Favourite <strong>Places</strong></h1>
      <div className="favourite-type">
        {data.place.map((place, index) => (
          <CardData
            key={index}
            image={require(`../assets/placeImages/${place.image}`)}
            heading={place.title}
            location={place.street}
            description={place.description}
            review={place.review}
          />
        ))}
      </div>
      <Footer/> 
    </div>
  );
};

export default Favourites;
