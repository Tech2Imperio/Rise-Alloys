import "./styles.css";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdOutlineFactory } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
// import { value } from "../../../assets";
import { aboutt2 } from "../../../assets";

export const Value = () => {
  const valueData = [
    {
      icons: <LuShoppingCart />,
      header: "Product Showcase",
      content:
        "Explore our premium aluminum, steel, and copper products in our interactive gallery. Discover exceptional quality and expert craftsmanship at Rise Alloys.",
    },
    {
      icons: <FaRegEnvelope />,
      header: "Get in Touch",
      content:
        "Ready for top-tier alloys? Contact us to explore stainless steel, copper, and nickel alloy products with unmatched quality and tailored solutions.",
    },
    {
      icons: <HiOutlineBadgeCheck />,
      header: "Quality Assurance",
      content:
        "Rise Alloys: Superior quality, premium materials, stringent standards. Trusted choice with certifications and warranties for reliability.",
    },
    {
      icons: <MdOutlineFactory />,
      header: "Manufacturing Excellence",
      content:
        "Our state-of-the-art manufacturing facilities ensure precision and excellence in every product. Explore our cutting-edge production processes.",
    },
  ];

  return (
    <section className="value-wrapper">
      <div className="value-section innerWidth paddings">
        <div className="value-content-container">
          <h2 className="PrimaryText value-main-header">
            Discover the Superiority of Rise Alloys
          </h2>

          <div className="value-grid">
            {valueData.map((item, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{item.icons}</div>
                <div className="value-text">
                  <h3 className="PrimaryText value-header">{item.header}</h3>
                  <p className="SecondaryText value-content">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <Link className="value-button" to="contact">
            Get a Quote
          </Link>
        </div>

        <div className="value-image-container">
          <div className="value-image">
            <img src={aboutt2 || "/placeholder.svg"} alt="value" />
          </div>
        </div>
      </div>
    </section>
  );
};
