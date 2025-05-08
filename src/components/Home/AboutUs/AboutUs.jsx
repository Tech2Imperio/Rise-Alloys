import "./styles.css";
import { Link } from "react-router-dom";
// import { homeSliderH1 } from "../../../assets";
import { about1 } from "../../../assets";

export const AboutUs = () => {
  return (
    <div className="home-about-section paddings innerWidth">
      <div className="home-about-container">
        <h1 className="home-about-header PrimaryText">About Us</h1>

        <div className="home-about-content">
          <div className="home-about-content-text">
            <h3 className="home-about-content-header SecondaryText Raleway">
              Rise Alloys
            </h3>
            <p className="home-about-paragraph">
              Rise Alloys has distinguished itself through seamless operations
              and strategic collaborations with product manufacturers. Our focus
              on meeting specific customer needs drives us to source even the
              smallest orders with precision and efficiency.
            </p>
            <p className="home-about-paragraph">
              Collaborate with Rise Alloys for consistent excellence, timely
              delivery, and unmatched customer service as we work together to
              achieve successful results.
            </p>
            <Link to="aboutus" className="home-about-redirect">
              Learn More
            </Link>
          </div>
          <div className="home-about-content-image">
            <img src={about1 || "/placeholder.svg"} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};
