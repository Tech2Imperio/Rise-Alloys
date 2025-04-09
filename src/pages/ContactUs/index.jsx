"use client";
import "./styles.css";
import { ContactLeft, ContactRight } from "../../components";
import { motion } from "framer-motion";

export const ContactUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="contact-section">
      <div className="contact-hero">
        <div className="overlay"></div>
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Contact Us</h1>
          <div className="separator"></div>
          <p>We'd love to hear from you</p>
        </motion.div>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-intro"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <p>
            Have questions about our products or services? Need a custom
            solution for your specific requirements? Our team is ready to assist
            you with any inquiries.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-left-wrapper"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ContactLeft />
          </motion.div>

          <motion.div
            className="contact-right-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ContactRight />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export * from "./ThankYou";
