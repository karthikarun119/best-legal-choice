import React from "react";
import './SearchAttorneys.css';
const SearchAttorneys = ()=>{
    return(
        <div className="search-container" id="section5">
            <div className="search-text">Tell us your needs, We will find you the best !</div>
            <div className="search-box">
            <input
                type="text"
                className="search-input"
                placeholder="Look for the best attorneys in the city"
                name="s"
                autocomplete="off"
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </div>
        </div>
    );
};
export default SearchAttorneys;