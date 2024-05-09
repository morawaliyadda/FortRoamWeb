// import React, {useState,useEffect}from "react";
// import "./search.css";
// import { FaSearch} from "react-icons/fa";

// const SearchBar = () => {

//   const [places, setPlaces] = useState({ place: [] });

//   useEffect(() => {
//       fetch("http://localhost:3010/place/")
//           .then(response => response.json())
//           .then(data => {
//               if (Array.isArray(data)) {
//                   setPlaces({ place: data }); // Ensure data is assigned properly
//               } else {
//                   console.error("Data fetched is not an array:", data);
//               }
//           })
//           .catch(error => console.error("Error fetching places:", error));
//   }, []);


//   return (
//      <form >
//      <div className="input-group">
//        <input
//          className="search-input"
//          type="search"
//          placeholder="Search"
//          aria-label="Search"
//        />
       
//          <button className="search-btn" type="button">
//            <FaSearch />
//          </button>
       
//      </div>
//    </form>
//   );
// };

// export default SearchBar;

import React, { useState, useEffect } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const navigate = useNavigate();



  // Function to handle search input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      // If empty, return or show an error message
      return;
    }

  const encodedSearchTerm = encodeURIComponent(searchTerm);
    navigate(`/search-results?query=${encodedSearchTerm}`);
  }

  return (
    <div className="search-container">
      <div className="input-group">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="search-btn" type="button" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      
    </div>
  );
};

export default SearchBar;
