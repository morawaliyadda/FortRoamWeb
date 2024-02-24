import React from "react";
import "./search.css";
import { FaSearch} from "react-icons/fa";

const SearchBar = () => {


  return (
     <form >
     <div className="input-group">
       <input
         className="search-input"
         type="search"
         placeholder="Search"
         aria-label="Search"
       />
       
         <button className="search-btn" type="button">
           <FaSearch />
         </button>
       
     </div>
   </form>
  );
};

export default SearchBar;
