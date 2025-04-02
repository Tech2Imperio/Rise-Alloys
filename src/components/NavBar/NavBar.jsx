"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import { logoWhiteW, logoBlackW } from "../../assets";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

export const NavBar = ({ background }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProducts = () => {
    setProductsOpen((prev) => !prev);
    console.log("Products Open:", !productsOpen); // Debugging log
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const productLinks = [
    { name: "Aluminium Alloy", path: "/aluminium-alloy" },
    { name: "Stainless Steel", path: "/stainless-steel" },
    { name: "Nickel Alloy", path: "/nickel-alloy" },
    { name: "Titanium Alloy", path: "/titanium-alloy" },
    { name: "Copper Alloy", path: "/copper-alloy" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isProductActive = () => {
    return productLinks.some((link) => location.pathname === link.path);
  };

  return (
    <nav className={`navbar ${scrolled || background ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src={scrolled || background ? logoBlackW : logoBlackW}
            alt="Rise Alloys"
            id="logoimg"
          />
        </Link>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                to={link.path}
                className={`navbar-link ${isActive(link.path) ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    className="active-indicator"
                    layoutId="activeIndicator"
                  />
                )}
              </Link>
            </motion.div>
          ))}

          <div className="dropdown-container" ref={dropdownRef}>
            <div
              className="navbar-link dropdown-trigger"
              onClick={toggleProducts}
            >
              Products
              <FaChevronDown
                className={`dropdown-icon ${productsOpen ? "open" : ""}`}
              />
            </div>
            <div className={`dropdown-menu ${productsOpen ? "open" : ""}`}>
              {productLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`dropdown-item ${
                    isActive(link.path) ? "active" : ""
                  }`}
                  onClick={() => {
                    setProductsOpen(false);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`toggle-bar ${isOpen ? "open" : ""}`}></div>
          <div className={`toggle-bar ${isOpen ? "open" : ""}`}></div>
          <div className={`toggle-bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};
