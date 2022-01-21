import React from "react";
import { workingDetails } from "../../data";
import  {ReactComponent as ImageDetails} from "../../assets/work.svg";
import './HowItWorks.css';


const HowItWorks = () => {
  return (
    <div className="work-wrapper" id="section4">
      <div className="working-details">
      <div className="work-heading">How it Works</div>
          {workingDetails.map((detail)=>{
              return(
                  <div key={detail.id} className="work-detail">
                      <div className="work-title">
                      <div className="outer-circle">
                      <div className="inner-circle"> </div>
                      </div>
                      <div className="work-txt">{detail.title}</div>
                     </div>
                      <div className="work-description"> {detail.description}</div>
                  </div>
              );
          })}
      </div>
      <div className="img-container"></div>
      <ImageDetails/>
    </div>
  );
};
export default HowItWorks;
