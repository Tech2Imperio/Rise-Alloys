import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { PiSmileySadLight } from "react-icons/pi";

export const NotFound = () => {
  return (
    <main className="main-component">
      <div className="conntent">
        <h1 className="error-content Raleway">
          <PiSmileySadLight className="error-img" />
          404
        </h1>
        <h2 className="error-msg text-3xl font-[Raleway] font-medium mb-4 text-center ">
          Page Not Found
        </h2>
        <p className="long-msg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="go-home Raleway">
          <Link to="/home">
            <button className="btn-msg">
              <HiOutlineHome className="home-img" />
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
