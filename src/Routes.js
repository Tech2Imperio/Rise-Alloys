import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes as RouteLines,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";
import {
  AboutUs,
  Aluminum,
  ContactUs,
  Copper,
  Home,
  Nickel,
  NotFound,
  StainLessSteel,
  ThankYou,
  Titanium,
  ElectroTube,
} from "./pages";
import ProductPage from "./pages/ProductPage/product-page";
import { ExclusiveElectroTube } from "./pages/ExclusiveElectroTube";
export const Routes = () => {
  const [navBackground, setNavBackground] = useState(
    window.location.pathname === "/" || window.location.pathname === "/aboutus"
      ? false
      : true
  );

  useEffect(() => {
    const handleChange = () => {
      if (
        window.scrollY < 700 &&
        (window.location.pathname === "/" ||
          window.location.pathname === "/aboutus")
      ) {
        setNavBackground(false);
      } else {
        setNavBackground(true);
      }
    };

    const scrolls = () => {
      const path = window.location.pathname;
      const isMobile = window.innerWidth < 500;

      const scrollPositions = {
        "/aluminium-alloy": 770,
        "/stainless-steel": 770,
        "/nickel-alloy": 770,
        "/titanium-alloy": 675,
        "/copper-alloy": 680,
      };

      if (isMobile) {
        for (const [key, value] of Object.entries(scrollPositions)) {
          if (path.includes(key)) {
            window.scrollTo(0, value);
            return;
          }
        }
      }

      window.scrollTo(0, 0);
    };

    window.addEventListener("scroll", handleChange);
    window.addEventListener("popstate", () => {
      handleChange();
      scrolls();
    });
    window.addEventListener("click", (event) => {
      if (
        event.target.tagName === "A" ||
        (event.target.tagName === "IMG" && event.target.id === "logoimg")
      ) {
        handleChange();
        scrolls();
      }
    });

    return () => {
      window.removeEventListener("scroll", handleChange);
      window.removeEventListener("popstate", handleChange);
      window.removeEventListener("click", (event) => {
        if (event.target.tagName === "A") {
          handleChange();
        }
      });
    };
  }, []);

  return (
    <Router>
      <RouteLines>
        <Route path="/" element={<App navBackground={navBackground} />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace={true} />} />
          <Route path="aluminium-alloy" element={<Aluminum />} />
          <Route path="titanium-alloy" element={<Titanium />} />
          <Route path="nickel-alloy" element={<Nickel />} />
          <Route path="stainless-steel" element={<StainLessSteel />} />
          <Route path="copper-alloy" element={<Copper />} />
          <Route path="electro-polished-tube" element={<ElectroTube />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="exclusive-electro" element={<ExclusiveElectroTube />} />
          <Route path="contact/thanks" element={<ThankYou />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
          {/* Product category routes */}

          <Route path="/stainless-steel/:productId" element={<ProductPage />} />

          <Route path="/aluminium-alloy/:productId" element={<ProductPage />} />

          <Route path="/titanium-alloy/:productId" element={<ProductPage />} />

          <Route path="/copper-alloy/:productId" element={<ProductPage />} />

          <Route path="/nickel-alloy/:productId" element={<ProductPage />} />

          <Route
            path="/electro-polished-tube/:productId"
            element={<ProductPage />}
          />
        </Route>
      </RouteLines>
    </Router>
  );
};
