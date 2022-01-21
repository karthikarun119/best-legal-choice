import React from "react";
import "./Articles.css";
import { articlesDetails } from "../../data";
const Articles = () => {
  return (
    <div className="art-container" id="section6">
      <div className="art-title">
        <div className="art-heading">Why BestLegalChoice ?</div>
        <div className="art-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className="art-list">
        {articlesDetails.map((details) => {
          return (
            <div key={details.id} className="art-item">
              <img
                src={details.imgSrc}
                className="art-img"
                alt="not-avaiable"
              />
              <div className="art-text">
                <div>{details.description}</div>
                <div className="art-link">Learn more</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Articles;
