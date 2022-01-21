import React from "react";
import "./TopAttorneys.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { attorneyDetails } from "../../data.js";
import { ListGroup, Card, ListGroupItem } from "react-bootstrap";
import { FaStar, FaHeart } from "react-icons/fa";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1360 },
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
const TopAttorneys = () => {
  return (
    <div className="top-container" id="section1">
      <div className="txt-wrapper">
        <div className="connect-txt">Connect With Trusted Top Attorneys</div>
        <div className="description">
          Get immediate legal help from experienced local attorneys at a cost
          you can afford.
        </div>
      </div>
      <Carousel responsive={responsive}>
          {attorneyDetails.map((detail) => {
            return (
                <Card key={detail.id}>
                <FaHeart className="heart-icon" />
                <div className="img-container">
                <Card.Img variant="top" src={detail.imgSrc} />
                <Card.Text className="rating">
                  {detail.rating}
                  <FaStar className="star-icon" />
                </Card.Text>
              </div>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="designation">
                  {detail.designation}
                </ListGroupItem>
                <ListGroupItem className="name">{detail.name}</ListGroupItem>
                <ListGroupItem className="experience">
                  {detail.experience}
                </ListGroupItem>
                <ListGroupItem className="time">
                  {detail.deliveryTime}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link className="price">{detail.price}</Card.Link>
              </Card.Body>
            </Card>
            );
          })}
        </Carousel>
    </div>
  );
};
export default TopAttorneys;
