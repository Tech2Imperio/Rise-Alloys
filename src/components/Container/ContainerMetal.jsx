"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

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
    subparts = [], // array of subparts with name and path
  } = props;

  const [isHovered, setIsHovered] = useState(null);

  return (
    <section className="product-section">
      <h1 className="product-title">{header}</h1>

      <div className="product-content">
        <div className="product-image-container">
          <img
            className="product-image"
            src={image.src || "/placeholder.svg"}
            alt={image.altText}
            loading="lazy"
          />
          {imageText && (
            <div className="product-image-overlay">
              <h3 className="product-image-text">{header.toUpperCase()}</h3>
              <p className="product-image-description">{imageText}</p>
            </div>
          )}
        </div>

        <div className="product-details">
          <h2 className="product-details-title">{contentHeader}</h2>

          <div className="product-description">{content}</div>

          {subparts && subparts.length > 0 && (
            <div className="product-subparts">
              <h3 className="subparts-title">Available Products</h3>
              <div className="subparts-grid">
                {subparts.map((subpart, index) => (
                  <Link
                    to={subpart.path}
                    key={index}
                    className="subpart-item"
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <span className="subpart-icon">
                      {isHovered === index ? "→" : "•"}
                    </span>
                    <span className="subpart-name">{subpart.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {availability && (
            <div className="product-availability">
              <h3 className="availability-title">Availability:</h3>
              <div className="availability-content">{availability}</div>
            </div>
          )}

          {specifications && (
            <div className="product-specifications">
              <h3 className="specifications-title">Specifications:</h3>
              <div className="specifications-content">{specifications}</div>
            </div>
          )}

          <div className="product-cta">
            <Link to="/contact" className="enquire-button">
              {button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
