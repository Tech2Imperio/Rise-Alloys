import "./styles.css";
import React from "react";
import { ContactLeft, ContactRight } from "../../components";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const ContactUs = () => {
  return (
    <section>
      <div className="contact-header">
        <h1 className="Title">Contact Us</h1>
        <p className="PrimaryText">Any question or remarks?</p>
      </div>
      <div className="contact-container">
        <motion.div
          custom="left"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <ContactLeft />
        </motion.div>
        <motion.div
          custom="right"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <ContactRight />
        </motion.div>
      </div>
    </section>
  );
};
export * from "./ThankYou";
