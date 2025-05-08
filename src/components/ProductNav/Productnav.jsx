"use client";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import { FaChevronDown } from "react-icons/fa";

export const ProductNav = ({ activeCategory }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);
  const location = useLocation();

  // Product categories with their subparts
  const productCategories = [
    {
      id: "aluminium-alloy",
      name: "Aluminium Alloy",
      subparts: [
        { name: "AA 2014A", path: "/aluminium-alloy/aa-2014a" },
        { name: "AA 2024", path: "/aluminium-alloy/aa-2024" },
        { name: "AA 2124", path: "/aluminium-alloy/aa-2124" },
        { name: "AA 5082", path: "/aluminium-alloy/aa-5082" },
        { name: "AA 5083", path: "/aluminium-alloy/aa-5083" },
        { name: "AA 6061", path: "/aluminium-alloy/aa-6061" },
        { name: "AA 6082", path: "/aluminium-alloy/aa-6082" },
        { name: "AA 7010", path: "/aluminium-alloy/aa-7010" },
        { name: "AA 7075", path: "/aluminium-alloy/aa-7075" },
        { name: "AA 3003", path: "/aluminium-alloy/aa-3003" },
        { name: "AA 5052", path: "/aluminium-alloy/aa-5052" },
        { name: "L63", path: "/aluminium-alloy/l63" },
        { name: "1200 TH14", path: "/aluminium-alloy/1200-th14" },
        { name: "6351T6 (HINDALCO)", path: "/aluminium-alloy/6351t6" },
      ],
    },
    {
      id: "titanium-alloy",
      name: "Titanium Alloy",
      subparts: [
        { name: "GRADE 1", path: "/titanium-alloy/grade-1" },
        { name: "GRADE 2", path: "/titanium-alloy/grade-2" },
        { name: "GRADE 5", path: "/titanium-alloy/grade-5" },
        { name: "GRADE 9", path: "/titanium-alloy/grade-9" },
        { name: "GRADE 5 ELI", path: "/titanium-alloy/grade-5-eli" },
        { name: "AMS A5.16M-2004", path: "/titanium-alloy/ams-a516m-2004" },
        { name: "TITANIUM FOIL", path: "/titanium-alloy/titanium-foil" },
      ],
    },
    {
      id: "stainless-steel",
      name: "Stainless Steel",
      subparts: [
        { name: "13-8 MO", path: "/stainless-steel/13-8-mo" },
        { name: "15-5 PH", path: "/stainless-steel/15-5-ph" },
        { name: "17-4 PH", path: "/stainless-steel/17-4-ph" },
        { name: "A286", path: "/stainless-steel/a286" },
        { name: "304/304L", path: "/stainless-steel/304-304l" },
        { name: "316/316L", path: "/stainless-steel/316-316l" },
        { name: "321", path: "/stainless-steel/321" },
        { name: "347", path: "/stainless-steel/347" },
        { name: "355", path: "/stainless-steel/355" },
        {
          name: "STEEL X4CRNI 13-4 NO 1.4313 (SS 415)",
          path: "/stainless-steel/steel-x4crni",
        },
      ],
    },
    {
      id: "copper-alloy",
      name: "Copper & Alloys",
      subparts: [
        { name: "Copper C101", path: "/copper-alloy/c101" },
        { name: "Copper C102", path: "/copper-alloy/c102" },
        { name: "C103", path: "/copper-alloy/c103" },
        { name: "C110", path: "/copper-alloy/c110" },
        { name: "COPPER ETP", path: "/copper-alloy/copper-etp" },
        { name: "CAA110", path: "/copper-alloy/caa110" },
        { name: "COPPER ZICRONIUM", path: "/copper-alloy/copper-zicronium" },
      ],
    },
    {
      id: "nickel-alloy",
      name: "Nickel Alloys",
      subparts: [
        { name: "Alloy 188", path: "/nickel-alloy/alloy-188" },
        { name: "Alloy 230", path: "/nickel-alloy/alloy-230" },
        { name: "Alloy 263", path: "/nickel-alloy/alloy-263" },
        { name: "Alloy 600", path: "/nickel-alloy/alloy-600" },
        { name: "Alloy 601", path: "/nickel-alloy/alloy-601" },
        { name: "Alloy 617", path: "/nickel-alloy/alloy-617" },
        { name: "Alloy 625", path: "/nickel-alloy/alloy-625" },
        { name: "Alloy 718", path: "/nickel-alloy/alloy-718" },
        { name: "Alloy X-750", path: "/nickel-alloy/alloy-x-750" },
        { name: "Alloy X", path: "/nickel-alloy/alloy-x" },
        { name: "Waspaloy", path: "/nickel-alloy/waspaloy" },
        { name: "Invar 36", path: "/nickel-alloy/invar-36" },
        { name: "Alloy 42", path: "/nickel-alloy/alloy-42" },
        { name: "Alloy 25/L-605", path: "/nickel-alloy/alloy-25-l-605" },
        { name: "Alloy 80A", path: "/nickel-alloy/alloy-80a" },
        { name: "Mu-Metal", path: "/nickel-alloy/mu-metal" },
        { name: "Alloy 82", path: "/nickel-alloy/alloy-82" },
      ],
    },
    {
      id: "electro-polished-tube",
      name: "Electro Polished Tube",
      subparts: [
        { name: 'Size 1/2" (OD 12.7 mm)', path: "/electro-polished-tube/12-7" },
        {
          name: 'Size 3/4" (OD 19.05 mm)',
          path: "/electro-polished-tube/19-05",
        },
        { name: 'Size 1" (OD 25.4 mm)', path: "/electro-polished-tube/25-4" },
        {
          name: 'Size 1 1/2" (OD 38.1 mm)',
          path: "/electro-polished-tube/38-1",
        },
        { name: 'Size 2" (OD 50.8 mm)', path: "/electro-polished-tube/50-8" },
        {
          name: 'Size 2 1/2" (OD 63.5 mm)',
          path: "/electro-polished-tube/63-5",
        },
        { name: 'Size 3" (OD 76.2 mm)', path: "/electro-polished-tube/76-2" },
        { name: 'Size 4" (OD 101.6 mm)', path: "/electro-polished-tube/101-6" },
      ],
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown !== null &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  // Check if current path matches a category or subpart
  const isActive = (categoryId) => {
    return location.pathname.includes(categoryId);
  };

  const isSubpartActive = (path) => {
    return location.pathname === path;
  };

  // Toggle dropdown visibility
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="product-nav-container">
      <div className="product-nav">
        {productCategories.map((category, index) => (
          <div
            key={index}
            className={`product-nav-item ${
              isActive(category.id) ? "active" : ""
            }`}
            ref={(el) => (dropdownRefs.current[index] = el)}
          >
            <div
              className="product-nav-link"
              onClick={() => toggleDropdown(index)}
            >
              <Link to={`/${category.id}`} className="category-link">
                {category.name}
              </Link>
              <FaChevronDown
                className={`dropdown-icon ${
                  activeDropdown === index ? "open" : ""
                }`}
              />
            </div>

            <div
              className={`product-dropdown ${
                activeDropdown === index ? "show" : ""
              }`}
            >
              <div className="dropdown-content">
                {category.subparts.map((subpart, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subpart.path}
                    className={`dropdown-item ${
                      isSubpartActive(subpart.path) ? "active" : ""
                    }`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {subpart.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
