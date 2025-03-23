import React from "react";
import "./CustomCarousel.css";
import { Carousel } from "react-bootstrap";
import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.jpg";
import c4 from "../../assets/c4.jpg";

const CustomCarousel = () => {
  return (
    <Carousel className="mt-4">
      <Carousel.Item>
        <img src={c1} alt="First slide" className="d-block w-100" />
        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>This is the first book.</h3>
          <hr />
          <p>This book is about programming language.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={c2} alt="Second slide" />
        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>This is my second book.</h3>
          <hr />
          <p>THis is the biography of some successful person.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={c3} alt="Third slide" />
        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>This is my third book</h3>
          <hr />
          <p>This book is about education.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={c4} alt="Fourth slide" />
        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>This is my fourth book</h3>
          hr
          <p>This book is about technology.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
