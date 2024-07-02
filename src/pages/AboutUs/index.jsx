import "./styles.css";
import React from "react";
import { motion } from "framer-motion";
import { aboutUs1, aboutUs2, aboutUsLand, aboutUsPort } from "../../assets";
import {
  FaUserCog,
  FaBalanceScale,
  FaLightbulb,
  FaWrench,
  FaBolt,
  FaIndustry,
} from "react-icons/fa";

export const AboutUs = () => {
  return (
    <section className="aboutus-section">
      <div className="image-design">
        <picture>
          <source media="(min-width: 800px)" srcSet={aboutUsLand} />
          <img
            src={aboutUsPort}
            alt="About Us"
            loading="lazy"
            style={{ height: "80vh", width: "100%", position: "relative" }}
          />
        </picture>
        <div className="aboutus-image-header">
          <motion.h1
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 300, opacity: 1 }}
            transition={{ duration: 5, type: "spring" }}
            className="aboutus-header-text Title"
          >
            About Us
          </motion.h1>
        </div>
      </div>
      <div className="aboutus-container">
        <div className="aboutus-header Raleway">
          "Bringing quality alloy steel and aluminum to dealers nationwide.
          <br />
          We specialize in providing top-notch materials for your business
          needs.
          <br />
          Discover excellence with us."
        </div>
        <div className="aboutus-content innerWidth paddings">
          <div className="about-left">
            <div className="about-image">
              <img
                className="img-cont1"
                src={aboutUs1}
                alt="Our Expertise"
                loading="lazy"
              />
            </div>
          </div>
          <div className="about-right">
            <div className="about-right-content">
              <div className="about-icons">
                <FaUserCog />
              </div>
              <div className="about-right-content-text">
                <strong className="Raleway">Expertise: </strong> Our team
                comprises seasoned metallurgists and engineers with a wealth of
                knowledge in stainless steel, aluminum, and nickel alloys. Their
                expertise enables us to create alloys that offer exceptional
                performance and durability.
              </div>
            </div>
            <div className="about-right-content">
              <div className="about-icons">
                <FaBalanceScale />
              </div>
              <div className="about-right-content-text">
                <strong className="Raleway">Quality: </strong> Quality is our
                top priority. We adhere to strict quality control measures
                throughout the manufacturing process to ensure that every alloy
                meets the highest standards of excellence.
              </div>
            </div>
            <div className="about-right-content">
              <div className="about-icons">
                <FaLightbulb />
              </div>
              <div className="about-right-content-text">
                <strong className="Raleway">Innovation: </strong> Innovation is
                at the heart of our operations. We invest in research and
                development to stay at the forefront of alloy technology,
                constantly improving our products to meet evolving industry
                demands.
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus-content innerWidth paddings">
          <div className="about-left">
            <div className="about-left-content">
              <div className="about-icons">
                <FaWrench />
              </div>
              <div className="about-left-content-text">
                <strong className="Raleway">Stainless Steel Alloys: </strong> We
                offer a wide range of stainless steel alloys suitable for
                various applications, including corrosion-resistant grades for
                harsh environments and high-strength alloys for structural
                purposes.
              </div>
            </div>
            <div className="about-left-content">
              <div className="about-icons">
                <FaBolt />
              </div>
              <div className="about-left-content-text">
                <strong className="Raleway">Nickel Alloys: </strong> Our nickel
                alloys excel in extreme environments, providing exceptional
                resistance to heat, corrosion, and wear. They are used in
                aerospace, chemical processing, and other demanding industries.
              </div>
            </div>
            <div className="about-left-content">
              <div className="about-icons">
                <FaIndustry />
              </div>
              <div className="about-left-content-text">
                <strong className="Raleway">Aluminum Alloys: </strong> Our
                aluminum alloys are known for their lightweight, corrosion
                resistance, and versatility, making them ideal for automotive,
                aerospace, and industrial applications.
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="about-image">
              <img
                className="img-cont1"
                src={aboutUs2}
                alt="Aluminum Alloys"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* Uncomment the below section if you want to include the carousel */}
        {/* <div className="aboutus-content padding">
            <Carousel interval={4000} pause={false}>
              {imageAboutslider.map((data, index) => (
                <Carousel.Item key={index}>
                  <img className="about-carousal-images" src={data} alt="" />
                </Carousel.Item>
              ))}
            </Carousel>
          </div> */}
      </div>
    </section>
  );
};
