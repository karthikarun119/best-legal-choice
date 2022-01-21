import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash-container">
      <div className="text-container">
        <div className="text-wrap">
          <div className="text1">Attorneys Who Fit Your Budget</div>
          <div className="text2">
            Get affordable legal help from quality attorneys. Compare free
            quotes and save thousands on legal fees!
          </div>
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="search-term"
                placeholder="Look for the best attorneys in the city"
                name="s"
                autocomplete="off"
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </div>
          </div>
          <div className="choose">Or choose form a category below</div>
          <div className="button-group">
            <button className="category-btn">Business</button>
            <button className="category-btn">Employment</button>
            <button className="category-btn">Estate Planning</button>
            <button className="category-btn">Family</button>
            <div className="more-list">+ more</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
