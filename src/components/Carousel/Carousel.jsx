import "./styles.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Carousels = (props) => {
  return (
    <Carousel interval={2000} pause={false}>
      {props.data.map((data, index) => (
        <Carousel.Item key={index}>
          <picture>
            <source media="(min-width: 500px)" srcSet={data.img.desktop} />
            <img
              className="carousal-images"
              src={data.img.mobile}
              alt={data.altText}
            />
          </picture>
          <Carousel.Caption>
            <h3 className="carousal-header Title">{data.header}</h3>
            <p className="carousal-content SecondaryText Raleway">{data.p}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
