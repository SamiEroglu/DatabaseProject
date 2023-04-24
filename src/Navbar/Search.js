import React from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Ne Aramıştınız?"
          />
          <button type="submit" className="searchButton">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
