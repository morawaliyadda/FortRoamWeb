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
    // Fetch places data from your API
    fetch("http://localhost:3010/place/")
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data); // Set places data received from the API
      })
      .catch((error) => console.error("Error fetching places:", error));
  }, []);

  useEffect(() => {
    // Filter places based on the search term
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

  return (
    <div>
      <h2>Search Results</h2>
      {searchResults.length > 0 ? (
        <div>
          {searchResults.map((place) => (
            <div key={place._id} className="search-result">
              <CardData
              heading={place.title}
              description={truncateDescription(place.description, 100)}
              review={place.review}
              id={place._id}/>
              {/* <h3>{place.title}</h3> */}
              {/* Display other details of the place */}
              
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
      <Footer />
    </div>
  );
};

export default SearchResults;
