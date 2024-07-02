import { aluminum, copper, nickel, stainLessSteel, titanium } from "../assets";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2000, // Adjust the delay (in milliseconds) as needed
    disableOnInteraction: false, // Allow autoplay to continue even when user interacts
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};

export const data = [
  {
    name: "Aluminium Alloy",
    image: aluminum,
    url: "aluminium-alloy",
  },
  {
    name: "Titanium Alloy",
    image: titanium,
    url: "titanium-alloy",
  },
  {
    name: "Stainless steel",
    image: stainLessSteel,
    url: "stainless-steel",
  },
  {
    name: "Copper Alloy",
    image: copper,
    url: "copper-alloy",
  },
  {
    name: "Nickel Alloy",
    image: nickel,
    url: "nickel-alloy",
  },
];
