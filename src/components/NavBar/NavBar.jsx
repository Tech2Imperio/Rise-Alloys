import "./styles.css";
import React from "react";
import { logoWhiteH } from "../../assets";
import { Link } from "react-router-dom";
import {
  FaFacebook as Facebook,
  FaXTwitter as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa6";

export const NavBar = (props) => {
  const open = () => {
    if (window.innerWidth < 1000) {
      const object = document.getElementById("dropdown");
      object.style.display =
        object.style.display === "block" ? "none" : "block";
    } else if (window.location.pathname === "") {
      setTimeout(() => {
        window.scrollTo({ top: 1300, behavior: "smooth" });
      }, 0.1);
    }
  };

  const logo = (
    <img id="logoimg" src={logoWhiteH} className="logo" alt="Logo" />
  );

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        backgroundColor: props.background ? "var(--teritary)" : "transparent",
        transition: "background-color 0.6s ease-in-out",
      }}
    >
      <div className="container-fluid">
        <Link to="" className="navbar-brand">
          {logo}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              <div data-bs-dismiss="offcanvas" aria-label="Close">
                <Link to="">{logo}</Link>
              </div>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <div className="nav-link active">
                  <div data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link className="Link" to="">
                      Home
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link active">
                  <div data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link className="Link" to="aboutus">
                      About Us
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link active">
                  <div className="nav-dropdown">
                    <Link className="Link nav-dropdown-text" onClick={open}>
                      Products
                    </Link>

                    <div className="nav-dropdown-content" id="dropdown">
                      <div data-bs-dismiss="offcanvas" aria-label="Close">
                        <Link className="Link" to="aluminium-alloy">
                          Aluminium Alloy
                        </Link>
                      </div>
                      <div data-bs-dismiss="offcanvas" aria-label="Close">
                        <Link className="Link" to="titanium-alloy">
                          Titanium Alloy
                        </Link>
                      </div>
                      <div data-bs-dismiss="offcanvas" aria-label="Close">
                        <Link className="Link" to="stainless-steel">
                          Stainless Steel
                        </Link>
                      </div>
                      <div data-bs-dismiss="offcanvas" aria-label="Close">
                        <Link className="Link" to="copper-alloy">
                          Copper & Alloy
                        </Link>
                      </div>
                      <div data-bs-dismiss="offcanvas" aria-label="Close">
                        <Link className="Link" to="nickel-alloy">
                          Nickel Alloy
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li className="nav-item">
                <div className="nav-link active">
                  <div data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link className="Link" to="blog">
                    Blog
                  </Link>
                  </div>
                </div>
              </li> */}
              <li className="nav-item">
                <div className="nav-link active">
                  <div data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link className="Link" to="contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
            <div className="nav-icons">
              <div className="nav-ficons">
                <div data-bs-dismiss="offcanvas" aria-label="Close">
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/imperiorailingsystem/"
                  >
                    <Facebook />
                  </Link>
                </div>
              </div>
              <div className="nav-ficons">
                <div data-bs-dismiss="offcanvas" aria-label="Close">
                  <Link target="_blank" to="https://twitter.com/ImperioRailing">
                    <Twitter />
                  </Link>
                </div>
              </div>
              <div className="nav-ficons">
                <div data-bs-dismiss="offcanvas" aria-label="Close">
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/imperio.railings/"
                    className="icons  "
                  >
                    <Instagram />
                  </Link>
                </div>
              </div>
              <div className="nav-ficons">
                <div data-bs-dismiss="offcanvas" aria-label="Close">
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/company/imperiorailingsystems/"
                  >
                    <Linkedin />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
