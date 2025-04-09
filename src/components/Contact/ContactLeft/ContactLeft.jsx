"use client";
import { Link } from "react-router-dom";
import "./styles.css";
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
    <aside className="contact-info-card">
      <div className="contact-info-container">
        <div className="contact-info-header">
          <h2>Contact Information</h2>
          <div className="separator-small"></div>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-text">
              <Link to={`tel:+919372593981`} className="contact-link">
                +91 93725 93981
              </Link>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-text">
              <Link to={`mailto:info@risealloys.com`} className="contact-link">
                info@risealloys.com
              </Link>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaLocationDot />
            </div>
            <div className="contact-text">New Queens Road, Mumbai - 400004</div>
          </div>
        </div>

        <div className="decorative-shape"></div>
        <div className="decorative-shape small"></div>

        <div className="social-links">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <Link
              to="https://www.facebook.com"
              target="_blank"
              className="social-icon"
            >
              <Facebook />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              className="social-icon"
            >
              <Twitter />
            </Link>
            <Link
              to="https://www.instagram.com/rise.alloys"
              target="_blank"
              className="social-icon"
            >
              <Instagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/rise-alloys"
              target="_blank"
              className="social-icon"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};
