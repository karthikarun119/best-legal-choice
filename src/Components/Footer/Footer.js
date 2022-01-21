import React from "react";
import "./Footer.css";
import { Link, animateScroll as scroll } from "react-scroll";

import { LogoIcon } from "../SvgComponents.js/SvgComponents";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="foot-container">
      <div className="foot-top">
        <LogoIcon className="logo" onClick={scrollToTop} />
        <nav className="foot-nav" id="navbar">
          <div className="foot-nav-content">
            <ul className="foot-nav-items">
              <li className="foot-nav-item">
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Top Attorneys
                </Link>
              </li>
              <li className="foot-nav-item">
                <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Services
                </Link>
              </li>
              <li className="foot-nav-item">
                <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Pricing
                </Link>
              </li>
              <li className="foot-nav-item">
                <Link
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  How it Works
                </Link>
              </li>
              <li className="foot-nav-item">
                <Link
                  activeClass="active"
                  to="section5"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Attorneys Apply
                </Link>
              </li>
              <li className="foot-nav-item">
                <Link
                  activeClass="foot-active"
                  to="section6"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="foot-nav" id="navbar">
          <div className="foot-nav-content">
            <ul className="foot-nav-items">
              <li className="foot-nav-item">Privacy policy</li>
              <li className="foot-nav-item">Terms & Conditions</li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="foot-bottom">
        &copy; 2019 BestLegalChoice. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
