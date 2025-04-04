import "./styles.css";
import { Link } from "react-router-dom";
// import { homeSliderH1 } from "../../../assets";
import { about1 } from "../../../assets";

export const AboutUs = () => {
  return (
    <div className="about-section paddings innerWidth">
      <div className="about-container">
        <h1 className="about-header PrimaryText">About Us</h1>

        <div className="about-content">
          <div className="about-content-text">
            <h3 className="about-content-header SecondaryText Raleway">
              Rise Alloys
            </h3>
            <p className="about-paragraph">
              Rise Alloys has distinguished itself through seamless operations
              and strategic collaborations with product manufacturers. Our focus
              on meeting specific customer needs drives us to source even the
              smallest orders with precision and efficiency.
            </p>
            <p className="about-paragraph">
              Collaborate with Rise Alloys for consistent excellence, timely
              delivery, and unmatched customer service as we work together to
              achieve successful results.
            </p>
            <Link to="aboutus" className="home-about-redirect">
              Learn More
            </Link>
          </div>
          <div className="about-content-image">
            <img src={about1 || "/placeholder.svg"} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};
