import '../App.css';
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import CardData from "../components/CardStyle/CardStyle";

const SearchResults = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [places, setPlaces] = useState([]);
  const searchTerm = location.search ? location.search.split('=')[1] : '';

  useEffect(() => {
    fetch("https://fortroam-server.onrender.com/place/")
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data); 
      })
      .catch((error) => console.error("Error fetching places:", error));
  }, []);

  useEffect(() => {
    const results = places.filter((place) =>
      place.title && place.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [places, searchTerm]);
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
    <div className="search-results-container">
      <h2 className='search-results-container-heading'>Search Results...</h2>
      {searchResults.length > 0 ? (
        <div className="search-results">
          {searchResults.map((place) => (
            <div key={place._id} className="search-result">
              <CardData
                heading={place.title}
                location={place.street}
                description={truncateDescription(place.description, 100)}
                averageRating={calculateAverageRating(place.reviews)}
                id={place._id}
                image={place.imageURL}
              />
              
            </div>
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
      
    </div>
    <Footer />
    </div>
  );
};

export default SearchResults;
