"use client";

import { useState, useEffect, useRef } from "react";
import "./styles.css";
import {
  sanitaryTubeDimensions,
  sanitaryTubeSpecs,
  sanitaryTubeFinish,
} from "../../data/electroTube";
import { useNavigate } from "react-router-dom";
import {
  certi,
  corres,
  electroTube,
  expbio,
  micfin,
  preeng,
} from "../../assets";
export const ExclusiveElectroTube = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDimension, setSelectedDimension] = useState(
    sanitaryTubeDimensions[3]
  );
  const horizontalRef = useRef(null);

  const Electropolished_Comparison = [
    {
      feature: "Corrosion Resistance",
      Electropolished_Stainless_Steel: "Excellent",
      Standard_Stainless_Steel: "Good",
    },
    {
      feature: "Surface Finish",
      Electropolished_Stainless_Steel: "Mirror-like smooth",
      Standard_Stainless_Steel: "Rough or slightly matte",
    },
    {
      feature: "Biocompatibility",
      Electropolished_Stainless_Steel: "High",
      Standard_Stainless_Steel: "Medium",
    },
    {
      feature: "Cleanliness",
      Electropolished_Stainless_Steel: "Hygienic, Low Contamination",
      Standard_Stainless_Steel: "Prone to surface contamination",
    },
    {
      feature: "Durability",
      Electropolished_Stainless_Steel: "Enhanced resistance to fouling",
      Standard_Stainless_Steel: "Standard resistance to fouling",
    },
    {
      feature: "Aesthetic Appeal",
      Electropolished_Stainless_Steel: "Shiny, smooth surface",
      Standard_Stainless_Steel: "Dull finish",
    },
  ];

  const Electropolished_Forms = [
    {
      EN: "EN 10088-2",
      Available_Forms: "Tubes, Pipes, Sheets",
      Equivalent_Grades: "AISI 304, 316",
    },
    {
      EN: "EN 10216-5",
      Available_Forms: "Tubes, Seamless Pipes",
      Equivalent_Grades: "AISI 304L, 316L",
    },
    {
      EN: "EN 10217-7",
      Available_Forms: "Welded Tubes",
      Equivalent_Grades: "AISI 316Ti, 304Ti",
    },
    {
      EN: "EN 10294-1",
      Available_Forms: "Hollow Sections, Tubes",
      Equivalent_Grades: "AISI 321, 347",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHorizontalScroll = (e) => {
    if (horizontalRef.current) {
      horizontalRef.current.scrollLeft += e.deltaY;
    }
  };

  const applications = [
    {
      name: "Pharmaceutical",
      description:
        "Ultra-clean environments requiring the highest standards of purity and cleanliness",
      icon: "pharmaceutical-icon.svg",
    },
    {
      name: "Medical Devices",
      description:
        "Precision instruments and implantable components with superior biocompatibility",
      icon: "medical-icon.svg",
    },
    {
      name: "Food Processing",
      description:
        "Hygienic processing equipment for premium food and beverage production",
      icon: "food-icon.svg",
    },
    {
      name: "Semiconductor",
      description:
        "Ultra-pure components for advanced chip manufacturing and clean rooms",
      icon: "semiconductor-icon.svg",
    },
    {
      name: "Aerospace",
      description:
        "High-performance components for critical aerospace applications",
      icon: "aerospace-icon.svg",
    },
    {
      name: "Luxury Design",
      description: "Architectural elements and premium design applications",
      icon: "design-icon.svg",
    },
  ];

  return (
    <div className="luxury-container">
      {/* Navigation */}

      {/* Mobile Menu */}
      <div className={`luxury-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="luxury-mobile-menu-content">
          <a
            href="#overview"
            onClick={() => {
              setActiveSection("overview");
              setIsMenuOpen(false);
            }}
          >
            Overview
          </a>
          <a
            href="#specifications"
            onClick={() => {
              setActiveSection("specifications");
              setIsMenuOpen(false);
            }}
          >
            Specifications
          </a>
          <a
            href="#applications"
            onClick={() => {
              setActiveSection("applications");
              setIsMenuOpen(false);
            }}
          >
            Applications
          </a>
          <a
            href="#experience"
            onClick={() => {
              setActiveSection("experience");
              setIsMenuOpen(false);
            }}
          >
            Experience
          </a>
          <button className="luxury-contact-btn mobile">
            Request Consultation
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section id="overview" className="luxury-hero">
        <div className="luxury-hero-content">
          <div className="luxury-hero-text">
            <h1 className="luxury-title">
              <span className="luxury-title-small">Introducing</span>
              <span className="luxury-title-main">Electro Polished Tube</span>
              <span className="luxury-title-tagline">
                Redefining Excellence in Stainless Steel
              </span>
            </h1>
            <p className="luxury-hero-description">
              Experience unparalleled quality with our premium electropolished
              stainless steel tubing. Crafted for perfection, designed for the
              most demanding applications.
            </p>
            <div className="luxury-hero-cta">
              <button
                className="luxury-primary-btn"
                onClick={() => {
                  document
                    .getElementById("specifications")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Collection
              </button>
              <button
                className="luxury-secondary-btn"
                onClick={() => {
                  document
                    .getElementById("certifications")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Technical Specifications
              </button>
            </div>
          </div>
        </div>
        <div className="luxury-hero-visual">
          <div className="luxury-product-showcase">
            <div className="luxury-product-image">
              <img src={electroTube} alt="Premium ElectroTube" />
            </div>
            <div className="luxury-product-highlights">
              <div className="luxury-highlight">
                <span className="luxury-highlight-number">99.9%</span>
                <span className="luxury-highlight-text">Purity</span>
              </div>
              <div className="luxury-highlight">
                <span className="luxury-highlight-number">316L</span>
                <span className="luxury-highlight-text">Premium Grade</span>
              </div>
              <div className="luxury-highlight">
                <span className="luxury-highlight-number">0.2Ra</span>
                <span className="luxury-highlight-text">Surface Finish</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="luxury-scroll-indicator">
          <span>Scroll to discover</span>
          <div className="luxury-scroll-line"></div>
        </div> */}
      </section>

      {/* Features Section */}
      <section className="luxury-features">
        <div className="luxury-section-header">
          <span className="luxury-section-subtitle">Exceptional Quality</span>
          <h2 className="luxury-section-title">Distinctive Features</h2>
        </div>
        <div className="luxury-features-grid">
          <div className="luxury-feature-card">
            <div className="luxury-feature-icon">
              <img src={micfin} alt="Mirror Finish" />
            </div>
            <h3 className="luxury-feature-title">Mirror-Like Finish</h3>
            <p className="luxury-feature-description">
              Electropolished to perfection, creating a flawless surface that
              resists contamination.
            </p>
          </div>
          <div className="luxury-feature-card">
            <div className="luxury-feature-icon">
              <img src={corres} alt="Corrosion Resistance" />
            </div>
            <h3 className="luxury-feature-title">
              Superior Corrosion Resistance
            </h3>
            <p className="luxury-feature-description">
              Enhanced passive layer provides unmatched protection in demanding
              environments.
            </p>
          </div>
          <div className="luxury-feature-card">
            <div className="luxury-feature-icon">
              <img src={preeng} alt="Precision" />
            </div>
            <h3 className="luxury-feature-title">Precision Engineering</h3>
            <p className="luxury-feature-description">
              Manufactured to exacting tolerances for perfect fit and
              performance.
            </p>
          </div>
          <div className="luxury-feature-card">
            <div className="luxury-feature-icon">
              <img src={expbio} alt="Biocompatibility" />
            </div>
            <h3 className="luxury-feature-title">
              Exceptional Biocompatibility
            </h3>
            <p className="luxury-feature-description">
              Ideal for medical and pharmaceutical applications requiring the
              highest purity.
            </p>
          </div>
        </div>
        <button
          className="luxury-submit-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
        {showMore && (
          <div className="mt-4">
            <p>
              The <strong>3A Sanitary Tube Fittings</strong> can be suited for{" "}
              <strong>clamp fittings</strong> or{" "}
              <strong>butt welding fittings</strong> and are designed for
              various <strong>processing connections</strong>. These fittings
              are widely used in the{" "}
              <strong>
                food, beverage, dairy, and pharmaceutical industries
              </strong>
              . The <strong>tri-clamp fittings</strong> can be{" "}
              <strong>quickly and easily assembled or disassembled</strong> for
              routine <strong>maintenance</strong> and{" "}
              <strong>inspection</strong>. They offer <strong>hygienic</strong>{" "}
              and <strong>secure</strong> connections to ensure the integrity of
              sanitary processing systems. If you need more details or
              specifications about our sanitary fittings, feel free to{" "}
              <strong>contact us</strong> for further assistance.
            </p>
          </div>
        )}
      </section>

      {/* Interactive Specifications */}
      <section id="specifications" className="luxury-specifications">
        <div className="luxury-section-header">
          <span className="luxury-section-subtitle">Technical Excellence</span>
          <h2 className="luxury-section-title">Product Specifications</h2>
        </div>

        <div className="luxury-specs-interactive">
          <div className="luxury-tube-visualizer">
            <div className="luxury-tube-display">
              <div
                className="luxury-tube"
                style={{
                  width: `${selectedDimension.OD_mm * 2}px`,
                  height: "300px",
                  borderRadius: `${selectedDimension.OD_mm}px`,
                }}
              >
                <div
                  className="luxury-tube-inner"
                  style={{
                    width: `${
                      (selectedDimension.OD_mm -
                        selectedDimension.Thickness_mm * 2) *
                      2
                    }px`,
                    height: "300px",
                    borderRadius: `${
                      selectedDimension.OD_mm - selectedDimension.Thickness_mm
                    }px`,
                  }}
                ></div>
              </div>
            </div>
            <div className="luxury-tube-dimensions">
              <div className="luxury-dimension">
                <span className="luxury-dimension-label">Outer Diameter</span>
                <span className="luxury-dimension-value">
                  {selectedDimension.OD_mm} mm
                </span>
              </div>
              <div className="luxury-dimension">
                <span className="luxury-dimension-label">Wall Thickness</span>
                <span className="luxury-dimension-value">
                  {selectedDimension.Thickness_mm} mm
                </span>
              </div>
              <div className="luxury-dimension">
                <span className="luxury-dimension-label">Size</span>
                <span className="luxury-dimension-value">
                  {selectedDimension.Size_in}"
                </span>
              </div>
            </div>
          </div>

          <div className="luxury-specs-selector">
            <h3 className="luxury-selector-title">Select Dimension</h3>
            <div className="luxury-size-options">
              {sanitaryTubeDimensions.map((dimension, index) => (
                <button
                  key={index}
                  className={`luxury-size-option ${
                    selectedDimension === dimension ? "active" : ""
                  }`}
                  onClick={() => setSelectedDimension(dimension)}
                >
                  {dimension.Size_in}"
                </button>
              ))}
            </div>

            <div className="luxury-specs-details">
              <div className="luxury-specs-table">
                <h4 className="luxury-table-title">Material Options</h4>
                <div className="luxury-table-content">
                  {sanitaryTubeSpecs[0].Materials.map((material, index) => (
                    <div key={index} className="luxury-material-option">
                      <span className="luxury-material-name">{material}</span>
                      <span className="luxury-material-indicator"></span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="luxury-specs-table">
                <h4 className="luxury-table-title">Finish Options</h4>
                <div className="luxury-table-content">
                  {sanitaryTubeFinish[0].Options.map((option, index) => (
                    <div key={index} className="luxury-finish-option">
                      <span className="luxury-finish-name">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="luxury-comparison-section">
          <h3 className="luxury-comparison-title">Performance Comparison</h3>
          <div className="luxury-comparison-table">
            <div className="luxury-comparison-header">
              <div className="luxury-comparison-cell header">Feature</div>
              <div className="luxury-comparison-cell header premium">
                ElectroTube
              </div>
              <div className="luxury-comparison-cell header standard">
                Standard Stainless Steel
              </div>
            </div>
            {Electropolished_Comparison.map((item, index) => (
              <div key={index} className="luxury-comparison-row">
                <div className="luxury-comparison-cell feature">
                  {item.feature}
                </div>
                <div className="luxury-comparison-cell premium">
                  {item.Electropolished_Stainless_Steel}
                </div>
                <div className="luxury-comparison-cell standard">
                  {item.Standard_Stainless_Steel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      {/* <section id="applications" className="luxury-applications">
        <div className="luxury-section-header">
          <span className="luxury-section-subtitle">Versatile Excellence</span>
          <h2 className="luxury-section-title">Premium Applications</h2>
        </div>

        <div
          className="luxury-horizontal-scroll"
          ref={horizontalRef}
          onWheel={handleHorizontalScroll}
        >
          {applications.map((app, index) => (
            <div key={index} className="luxury-application-card">
              <div className="luxury-application-icon">
                <img src="/placeholder.svg?height=80&width=80" alt={app.name} />
              </div>
              <h3 className="luxury-application-title">{app.name}</h3>
              <p className="luxury-application-description">
                {app.description}
              </p>
              <button
                className="luxury-submit-btn"
                onClick={() => navigate("/contact")}
              >
                Request Consultation
              </button>
            </div>
          ))}
        </div>
      </section> */}

      {/* Standards Section */}
      <section id="certifications" className="luxury-standards">
        <div className="luxury-section-header">
          <span className="luxury-section-subtitle">Certified Excellence</span>
          <h2 className="luxury-section-title">Industry Standards</h2>
        </div>

        <div className="luxury-standards-grid">
          {Electropolished_Forms.map((standard, index) => (
            <div key={index} className="luxury-standard-card">
              <div className="luxury-standard-header">
                <h3 className="luxury-standard-title">{standard.EN}</h3>
                <div className="luxury-standard-badge">
                  {standard.Equivalent_Grades}
                </div>
              </div>
              <div className="luxury-standard-content">
                <p className="luxury-standard-description">
                  {standard.Available_Forms}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="luxury-experience">
        <div className="luxury-experience-content">
          <div className="luxury-section-header light">
            <span className="luxury-section-subtitle">Unmatched Quality</span>
            <h2 className="luxury-section-title">The ElectroTube Experience</h2>
          </div>
          <p className="luxury-experience-description">
            When you choose ElectroTube, you're selecting more than just a
            product – you're embracing a commitment to excellence. Our
            electropolished tubes represent the pinnacle of stainless steel
            engineering, offering unparalleled performance, aesthetics, and
            longevity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ExclusiveElectroTube;
