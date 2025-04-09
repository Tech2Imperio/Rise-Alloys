"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./style.css";

export const ThankYou = () => {
  return (
    <section className="thank-you-section">
      <div className="thank-you-container">
        <motion.div
          className="thank-you-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="envelope-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Send-Email-Envelope--Streamline-Ultimate"
            >
              <path
                fill="#f5f5f5"
                d="M21.4 17.2a1 1 0 0 1 -0.979 0.8H5.96a1 1 0 0 1 -0.979 -1.2l2.083 -10a1 1 0 0 1 0.979 -0.8H22.5a1 1 0 0 1 0.979 1.2l-2.079 10Z"
                strokeWidth={1}
              />
              <path
                fill="#ffffff"
                d="M8.043 6a1 1 0 0 0 -0.979 0.8l-2.083 10A1 1 0 0 0 5.96 18h0.667l12 -12H8.043Z"
                strokeWidth={1}
              />
              <path
                stroke="#2a5298"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.4 17.2a1 1 0 0 1 -0.979 0.8H5.96a1 1 0 0 1 -0.979 -1.2l2.083 -10a1 1 0 0 1 0.979 -0.8H22.5a1 1 0 0 1 0.979 1.2l-2.079 10Z"
                strokeWidth={1}
              />
              <path
                stroke="#2a5298"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m7.427 6.212 5.117 5.511a2 2 0 0 0 2.613 0.277l8.095 -5.666"
                strokeWidth={1}
              />
              <path
                stroke="#2a5298"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M0.5 7h4"
                strokeWidth={1}
              />
              <path
                stroke="#2a5298"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M0.5 10h3"
                strokeWidth={1}
              />
              <path
                stroke="#2a5298"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M0.5 13h2"
                strokeWidth={1}
              />
            </svg>
          </div>

          <motion.h1
            className="thank-you-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Thank You
          </motion.h1>

          <motion.div
            className="separator"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>

          <motion.p
            className="thank-you-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Thank you for visiting <span>Rise Alloys</span> website.
            <br />
            You will receive an email message shortly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link to="/" className="home-button">
              <FaArrowLeft /> Back Home
            </Link>
          </motion.div>

          <motion.p
            className="support-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            If you have any issues, please <Link to="/contact">Contact Us</Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
