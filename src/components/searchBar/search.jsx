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
