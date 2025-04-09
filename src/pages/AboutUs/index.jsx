"use client";
import { motion } from "framer-motion";
import "./styles.css";
import { metalpro, metalPro1, metalPro3 } from "../../assets";
import {
  FaUserCog,
  FaBalanceScale,
  FaLightbulb,
  FaWrench,
  FaBolt,
  FaIndustry,
} from "react-icons/fa";

export const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="about-section">
      <div className="hero-container">
        <div className="hero-image">
          <img
            src={metalpro || "/placeholder.svg"}
            alt="About Us"
            loading="lazy"
          />
          <div className="overlay"></div>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="hero-title" style={{ color: "white" }}>
              About Us
            </h1>
            <div className="separator"></div>
            <p className="hero-quote">
              Crafting Excellence with Precision Metal Alloys
            </p>
          </motion.div>
        </div>
      </div>

      <div className="about-container">
        <motion.div
          className="mission-statement"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <p>
            "Bringing quality alloy steel and aluminum to dealers nationwide. We
            specialize in providing top-notch materials for your business needs.
            Discover excellence with us."
          </p>
        </motion.div>

        <motion.div
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="image-column">
            <motion.div variants={fadeIn} className="image-wrapper">
              <img
                src={metalPro1 || "/placeholder.svg"}
                alt="Our Expertise"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="text-column">
            <motion.div variants={fadeIn} className="feature-item">
              <div className="icon-wrapper">
                <FaUserCog />
              </div>
              <div className="feature-content">
                <h3>Expertise</h3>
                <p>
                  Our team comprises seasoned metallurgists and engineers with a
                  wealth of knowledge in stainless steel, aluminum, and nickel
                  alloys. Their expertise enables us to create alloys that offer
                  exceptional performance and durability.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="feature-item">
              <div className="icon-wrapper">
                <FaBalanceScale />
              </div>
              <div className="feature-content">
                <h3>Quality</h3>
                <p>
                  Quality is our top priority. We adhere to strict quality
                  control measures throughout the manufacturing process to
                  ensure that every alloy meets the highest standards of
                  excellence.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="feature-item">
              <div className="icon-wrapper">
                <FaLightbulb />
              </div>
              <div className="feature-content">
                <h3>Innovation</h3>
                <p>
                  Innovation is at the heart of our operations. We invest in
                  research and development to stay at the forefront of alloy
                  technology, constantly improving our products to meet evolving
                  industry demands.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="text-column">
            <motion.div variants={fadeIn} className="feature-item">
              <div className="icon-wrapper">
                <FaWrench />
              </div>
              <div className="feature-content">
                <h3>Stainless Steel Alloys</h3>
                <p>
                  We offer a wide range of stainless steel alloys suitable for
                  various applications, including corrosion-resistant grades for
                  harsh environments and high-strength alloys for structural
                  purposes.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="feature-item">
              <div className="icon-wrapper">
                <FaBolt />
              </div>
              <div className="feature-content">
                <h3>Nickel Alloys</h3>
                <p>
                  Our nickel alloys excel in extreme environments, providing
                  exceptional resistance to heat, corrosion, and wear. They are
                  used in aerospace, chemical processing, and other demanding
                  industries.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="feature-item">
              <div className="icon-wrapper">
                <FaIndustry />
              </div>
              <div className="feature-content">
                <h3>Aluminum Alloys</h3>
                <p>
                  Our aluminum alloys are known for their lightweight, corrosion
                  resistance, and versatility, making them ideal for automotive,
                  aerospace, and industrial applications.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="image-column">
            <motion.div variants={fadeIn} className="image-wrapper">
              <img
                src={metalPro3 || "/placeholder.svg"}
                alt="Aluminum Alloys"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
