import "./index.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="nav-bar">
        <a href="/" className="nav-logo-link">
          <img
            className="nav-logo"
            src="https://actualize.co.in/wp-content/uploads/2023/05/Actualize-updated-footer-logo-1.png"
            alt="logo"
          />
        </a>

        <ul className="nav-links">
          <li className="nav-list-item">
            <a className="nav-anchor" href="/#about-us">
              About
            </a>
          </li>

          <li className="nav-list-item">
            <a className="nav-anchor" href="#">
              Industries
              <svg
                className="desktop-nav-arrow"
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
              >
                <path
                  d="M13.5321 2.42687L11.9991 0.921875L6.88906 5.99687L1.81406 0.921874L0.274062 2.42687L5.38406 7.53687L6.88906 9.07687L8.42906 7.53688L13.5391 2.42687Z"
                  fill="black"
                ></path>
              </svg>
            </a>
            <ul className="dropdown-list">
              <li className="dropdown-list-item">Heavy Engineering</li>
              <li className="dropdown-list-item">Industrial Engineering</li>
              <li className="dropdown-list-item">Automotive Engineering</li>
              <li
                className="dropdown-list-item"
                style={{ borderBottom: "none" }}
              >
                Process Engineering
              </li>
            </ul>
          </li>

          <li className="nav-list-item">
            <a className="nav-anchor" href="#">
              Services
              <svg
                className="desktop-nav-arrow"
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
              >
                <path
                  d="M13.5321 2.42687L11.9991 0.921875L6.88906 5.99687L1.81406 0.921874L0.274062 2.42687L5.38406 7.53687L6.88906 9.07687L8.42906 7.53688L13.5391 2.42687Z"
                  fill="black"
                ></path>
              </svg>
            </a>
            <ul className="dropdown-list">
              <li className="dropdown-list-item">Engineering Services</li>
              <li className="dropdown-list-item">Digital Transformation</li>
              <li
                className="dropdown-list-item"
                style={{ borderBottom: "none" }}
              >
                Staffing and Consulting
              </li>
            </ul>
          </li>

          <li className="nav-list-item">
            <a
              className="nav-anchor"
              href="https://actualize.zohorecruit.in/jobs/Careers"
            >
              Careers
            </a>
          </li>
          <li className="nav-list-item">
            <Link to="/contact" className="nav-anchor">
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-list-item nav-search-item">
          <div className="nav-search-wrapper">
            <input
              className="nav-search"
              type="search"
              placeholder="Search..."
            />
            <span className="nav-search-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="5" stroke="#000" strokeWidth="2" />
                <line
                  x1="11.4142"
                  y1="11"
                  x2="14"
                  y2="13.5858"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
