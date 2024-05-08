import React ,{ useState } from "react";
import "./search.css";
import { FaSearch} from "react-icons/fa";

const SearchBar = () => {
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
     <form >
     <div className={`input-group ${searchActive ? 'active' : ''}`}>
       <input
         className="search-input"
         type="search"
         placeholder="Search"
         aria-label="Search"
       />
       
         <button className="search-btn" type="button" onClick={toggleSearch}>
           <FaSearch />
         </button>
       
     </div>
   </form>
  );
};

export default SearchBar;
