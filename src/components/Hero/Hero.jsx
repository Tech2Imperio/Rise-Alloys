"use client";
import "./styles.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = ({ data }) => {
  // Use the first three carousel images for our new design
  const heroImages = data.slice(0, 3);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title Title">Premium Alloy Solutions</h1>
          <p className="hero-description SecondaryText Raleway">
            Bringing quality alloy steel and aluminum to dealers nationwide. We
            specialize in providing top-notch materials for your business needs.
          </p>
          <Link to="/contact" className="hero-button Raleway">
            Get in Touch
          </Link>
        </motion.div>
      </div>

      <div className="floating-images-container">
        {heroImages.map((item, index) => (
          <motion.div
            key={index}
            className="floating-image-wrapper"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
          >
            <div className="floating-image-container">
              <img
                src={item.img.desktop || "/placeholder.svg"}
                alt={item.altText}
                className="floating-image"
              />
              <div className="floating-image-caption">
                <h3>{item.header}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
