import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdOutlineFactory } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { value } from "../../../assets";

export const Value = () => {
  var valueDatas = [
    {
      icons: <LuShoppingCart />,
      header: "Product Showcase",
      content:
        "Explore our premium aluminum, steel, and copper products in our interactive gallery. Discover exceptional quality and expert craftsmanship at Rise Alloys, setting us apart in the industry. Contact us today for high-quality solutions tailored to your needs",
    },
    {
      icons: <FaRegEnvelope />,
      header: "Get in Touch",
      content:
        "Ready for top-tier alloys? Contact us to explore stainless steel, copper, and nickel alloy products. Let's exceed your expectations with our unmatched quality and tailored solutions.",
    },
    {
      icons: <HiOutlineBadgeCheck />,
      header: "Quality Assurance",
      content:
        "Rise Alloys: Superior quality, premium materials, stringent standards. Trusted choice with certifications and warranties for reliability. Experience excellence today!",
    },
    {
      icons: <MdOutlineFactory />,
      header: "Manufacturing Excellence",
      content:
        "Our state-of-the-art manufacturing facilities ensure precision and excellence in every product. Explore our cutting-edge production processes that make Rise Alloys a leader in the industry.",
    },
  ];

  return (
    <section className="v-wrapper">
      <div className="value-section innerWidth paddings">
        <div className="v-right">
          <div className="PrimaryText value-main-header">
            Discover the Superiority of Rise Alloys
          </div>

          <div className="value-container">
            {valueDatas.map((item, index) => {
              return (
                <div key={index} className="value-provider">
                  <div className="value-icon">{item.icons}</div>
                  <div className="value-right">
                    <span className="PrimaryText value-header">
                      {item.header}
                    </span>
                    <span className="SecondaryText value-content">
                      {item.content}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <Link className="value-button button val-btn" to="contact">
            Get a Quote
          </Link>
        </div>
        <div className="v-left">
          <div className="value-image">
            <img src={value} alt="value" />
          </div>
        </div>
      </div>
    </section>
  );
};
