import "./styles.css";
import React from "react";
import { Carousels, AboutUs, ProductSlider, Value } from "../../components";
import { carousals } from "../../data";

export const Home = () => {
  //
  return (
    <div className="home-header">
      <Carousels data={carousals} />
      <ProductSlider />
      <AboutUs />
      <Value />
    </div>
  );
};
