import { Link } from "react-router-dom";
import "./style.css";
import React from "react";

export const ContainerMetal = (props) => {
  const {
    header, // string
    image, // object
    imageText, // string
    contentHeader, // string
    content, // JSX element
    availability, // string
    specifications, // string
    button, // string
  } = props;

  return (
    <>
      <h1 className="container-header">{header}</h1>
      <div className="content">
        <div className="image-container">
          <img
            className="content-img"
            src={image.src}
            alt={image.altText}
            loading="lazy"
          />
          <div className="content-text">
            <h3 className="content-text-header Raleway">
              {header.toUpperCase()}
            </h3>
            {imageText ? (
              <p className="content-text-content">{imageText}</p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="text-container">
          <h3 className="content-header Raleway">{contentHeader}</h3>
          <>{content}</>
          {availability ? (
            <div className="content-availability">
              <h3 className="availability-header">Availability:</h3>
              <div className="availability-content">{availability}</div>
            </div>
          ) : (
            <></>
          )}
          {specifications ? (
            <div className="content-specifications">
              <h3 className="specifications-header">Specifications:</h3>
              <div className="specifications-content">{specifications}</div>
            </div>
          ) : (
            <></>
          )}
          <div className="button-container">
            <Link to="/contact" className="enquire-button Raleway">
              {button}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
