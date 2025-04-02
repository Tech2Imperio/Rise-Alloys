import "./styles.css";
import React from "react";
import { Hero, AboutUs, ProductSlider, Value } from "../../components";
import { carousals } from "../../data";

export const Home = () => {
  //
  return (
    <div className="home-header">
      <Hero data={carousals} />
      <ProductSlider />
      <AboutUs />
      <Value />
    </div>
  );
};
