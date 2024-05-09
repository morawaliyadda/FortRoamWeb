import React from "react";
import CardData from "../components/CardStyle/CardStyle.jsx";
import data from "../components/places/places.jsx";
import Footer from "../components/Footer/Footer.jsx";

const AllItems = () => {
  return (
    <div>
      <h1 className="Categorical-heading">Popular <strong>Places</strong></h1>
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
      <Footer/>
    </div>
  );
};

export default AllItems;
