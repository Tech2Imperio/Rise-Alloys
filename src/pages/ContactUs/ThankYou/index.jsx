import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const ThankYou = () => {
  return (
    <main className="thanks-page">
      <div className="thankyou_main_content">
        <div className="mail-img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            id="Send-Email-Envelope--Streamline-Ultimate"
          >
            <path
              fill="#e3e3e3"
              d="M21.4 17.2a1 1 0 0 1 -0.979 0.8H5.96a1 1 0 0 1 -0.979 -1.2l2.083 -10a1 1 0 0 1 0.979 -0.8H22.5a1 1 0 0 1 0.979 1.2l-2.079 10Z"
              strokeWidth={1}
            />
            <path
              fill="#ffffff"
              d="M8.043 6a1 1 0 0 0 -0.979 0.8l-2.083 10A1 1 0 0 0 5.96 18h0.667l12 -12H8.043Z"
              strokeWidth={1}
            />
            <path
              stroke="#004aad"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.4 17.2a1 1 0 0 1 -0.979 0.8H5.96a1 1 0 0 1 -0.979 -1.2l2.083 -10a1 1 0 0 1 0.979 -0.8H22.5a1 1 0 0 1 0.979 1.2l-2.079 10Z"
              strokeWidth={1}
            />
            <path
              stroke="#004aad"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m7.427 6.212 5.117 5.511a2 2 0 0 0 2.613 0.277l8.095 -5.666"
              strokeWidth={1}
            />
            <path
              stroke="#004aad"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M0.5 7h4"
              strokeWidth={1}
            />
            <path
              stroke="#004aad"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M0.5 10h3"
              strokeWidth={1}
            />
            <path
              stroke="#004aad"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M0.5 13h2"
              strokeWidth={1}
            />
          </svg>
        </div>
        <div className="thanks-msg">Thank You !</div>
        <div>
          <p className="short-msg">
            Thank you for visiting <span>Rise Alloys</span> website. <br />
            You will receive an email message shortly.
          </p>
        </div>
        <Link to="/home" className="home-btn">
          <FaArrowLeft /> Back Home
        </Link>
        <div>
          <p className="issue-msg">
            If you have any issue <Link to="/contact">Contact Us</Link>
          </p>
        </div>
      </div>
    </main>
  );
};
