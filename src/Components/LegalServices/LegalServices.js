import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "react-bootstrap";
import { servicesDetails } from "../../data";
import "./LegalServices.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const LegalServices = () => {
  return (
    <div className="container" id="section2">
      <div className=" pl-services">Popular Legal Services</div>
      <Carousel responsive={responsive}>
        {servicesDetails.map((details) => {
          return (
            <Card key={details.id}>
              <Card.Body style={{ background: details.imgSrc }}>
                <div className="card-details">
                  <div>{details.title}</div>
                  <div>{details.description}</div>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </Carousel>
    </div>
  );
};
export default LegalServices;
