"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "./styles.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { data, sliderSettings } from "../../../utils/control";
import { Link } from "react-router-dom";

export const ProductSlider = () => {
  return (
    <section id="products" className="main-container">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <h1 className="about-header PrimaryText">Products</h1>
        </div>

        <div className="slider-container">
          <Swiper
            className="slide-swiper"
            modules={[Autoplay]}
            {...sliderSettings}
          >
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <Link
                  to={card.url}
                  className="flexColStart r-card"
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.name + "railings"}
                  />
                  <span className="product-name PrimaryText">{card.name}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="slider-navigation">
      <button className="nav-btn prev-btn" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button className="nav-btn next-btn" onClick={() => swiper.slideNext()}>
        &gt;
      </button>
    </div>
  );
};
