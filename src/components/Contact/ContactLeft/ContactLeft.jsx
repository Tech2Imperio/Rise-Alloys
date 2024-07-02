import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaSquareFacebook as Facebook,
  FaXTwitter as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa6";

export const ContactLeft = () => {
  return (
    <aside className="contact-left">
      <div className="contact-left-container">
        <div className="contact-left-design">
          <div className="contact-left-ring"></div>
          <div className="contact-left-ring"></div>
        </div>
        <div className="left-header-container">
          <h1 className="left-header PrimaryText">Contact Information</h1>
        </div>
        <div className="left-contact-container">
          <div className="left-contact-details">
            <div className="left-contact-detail">
              <div>
                <FaPhone />
              </div>
              <div>
                <Link to={`tel:+910000000000`} target="_blank">
                  +91 93725 93981
                </Link>
              </div>
            </div>
            <div className="left-contact-detail">
              <div>
                <FaEnvelope />
              </div>
              <div>
                <Link to={`mailto:tech@risealloys.com`} target="_blank">
                  info@risealloys.com
                </Link>
              </div>
            </div>
            <div className="left-contact-detail">
              <div>
                <FaLocationDot />
              </div>
              <div>New Queens Road, Mumbai - 400004</div>
            </div>
          </div>
        </div>
        <div className="left-contact-footer">
          <div className="left-contact-footer-icons">
            <div className="left-content-icons">
              <Link
                target="_blank"
                to="https://www.facebook.com/imperiorailingsystem/"
              >
                <Facebook />
              </Link>
            </div>
            <div className="left-content-icons">
              <Link target="_blank" to="https://twitter.com/ImperioRailing">
                <Twitter />
              </Link>
            </div>
            <div className="left-content-icons">
              <Link
                target="_blank"
                to="https://www.instagram.com/imperio.railings/"
              >
                <Instagram />
              </Link>
            </div>
            <div className="left-content-icons">
              <Link
                target="_blank"
                to="https://www.linkedin.com/company/imperiorailingsystems/"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
