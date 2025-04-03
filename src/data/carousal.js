import {
  homeSliderH1,
  homeSliderH2,
  homeSliderH3,
  homeSliderH4,
  homeSliderH5,
  homeSliderH6,
  homeSliderH7,
  homeSliderL1,
  homeSliderL2,
  homeSliderL3,
  homeSliderL4,
  homeSliderL5,
  homeSliderL6,
  homeSliderL7,
  metalPro1,
  metalPro2,
  metalPro3,
} from "../assets";

const imageSlider = [
  [
    metalPro1,
    metalPro2,
    metalPro3,
    homeSliderH1,
    homeSliderH2,
    homeSliderH3,
    homeSliderH4,
    homeSliderH5,
    homeSliderH6,
    homeSliderH7,
  ],
  [
    homeSliderL1,
    homeSliderL2,
    homeSliderL3,
    homeSliderL4,
    homeSliderL5,
    homeSliderL6,
    homeSliderL7,
  ],
];

export const carousals = [
  {
    img: {
      desktop: imageSlider[0][0],
      mobile: imageSlider[1][0],
    },
    altText: "First Slide",
    header: "Creating Strong Metal Alloys",
    p: "Discover the art and science behind crafting durable metal alloys that withstand extreme conditions.",
  },
  {
    img: {
      desktop: imageSlider[0][1],
      mobile: imageSlider[1][1],
    },
    altText: "Second Slide",
    header: "Aluminum: Lightweight and Versatile",
    p: "Explore the versatility of aluminum alloys, known for their lightweight yet robust properties, ideal for aerospace and automotive applications.",
  },
  {
    img: {
      desktop: imageSlider[0][2],
      mobile: imageSlider[1][2],
    },
    altText: "Third Slide",
    header: "Steel: Strength and Durability",
    p: "Delve into the world of steel alloys, renowned for their unmatched strength and durability, essential in construction and engineering.",
  },
  {
    img: {
      desktop: imageSlider[0][3],
      mobile: imageSlider[1][3],
    },
    altText: "Fourth Slide",
    header: "Stainless Steel: Corrosion Resistance",
    p: "Learn about stainless steel alloys, prized for their exceptional corrosion resistance, perfect for kitchenware and medical equipment.",
  },
  {
    img: {
      desktop: imageSlider[0][4],
      mobile: imageSlider[1][4],
    },
    altText: "Fifth Slide",
    header: "Copper Alloys: Conductivity and Flexibility",
    p: "Discover the unique properties of copper alloys, prized for their electrical conductivity and flexibility, used in electronics and plumbing.",
  },
  {
    img: {
      desktop: imageSlider[0][5],
      mobile: imageSlider[1][5],
    },
    altText: "Sixth Slide",
    header: "Titanium: Lightweight and High Strength",
    p: "Explore titanium alloys, known for their lightweight nature and high strength-to-weight ratio, essential in aerospace and sports equipment.",
  },
  {
    img: {
      desktop: imageSlider[0][6],
      mobile: imageSlider[1][6],
    },
    altText: "Seventh Slide",
    header: "Plates, Sheets, and Pipes: Forming the Foundation",
    p: "Understand the importance of plates, sheets, and pipes in metalworking, serving as the building blocks for various alloy compositions and applications.",
  },
];
