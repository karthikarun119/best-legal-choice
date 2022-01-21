import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { ReactComponent as Logo } from "./../../logo.svg";
import "./Header.css";

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="header">
      <Logo className="logo" onClick={scrollToTop} />
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Articles
              </Link>
            </li>
            <li className="nav-item">Login</li>
            <li className="nav-btn">
              <button className="register-btn">Register</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;
