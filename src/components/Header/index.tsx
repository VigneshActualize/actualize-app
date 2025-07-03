import { useState, useEffect } from "react";
import "./index.css";

const slides = [
  {
    video: "/navbg1video.mp4",
    heading: "Digital Transformation",
  },
  {
    video: "/navbg2video.mp4",
    heading: "Staffing and Consulting Solutions",
  },
  {
    video: "/navbg3video.mp4",
    heading: "Engineering Services",
  },
];

const Header = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nav-container">
      <video
        key={slides[index].video}
        className="background-video"
        src={slides[index].video}
        autoPlay
        muted
        loop
        playsInline
      />

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
            <a className="nav-anchor" href="#">
              About
            </a>
            <span className="nav-number"></span>
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
                  fill="white"
                ></path>
              </svg>
            </a>
            <span className="nav-number"></span>
            <ul className="dropdown-list">
              <li className="dropdown-list-item">Heavy Engineering</li>
              <li className="dropdown-list-item">Industrial Engineering</li>
              <li className="dropdown-list-item">Automotive Engineering</li>
              <li className="dropdown-list-item">Process Engineering</li>
            </ul>
          </li>

          <li className="nav-list-item">
            <a className="nav-anchor" href="#">
              Careers
            </a>
            <span className="nav-number"></span>
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
                  fill="white"
                ></path>
              </svg>
            </a>
            <span className="nav-number"></span>
            <ul className="dropdown-list">
              <li className="dropdown-list-item">Engineering Services</li>
              <li className="dropdown-list-item">Digital Transformation</li>
              <li className="dropdown-list-item">Staffing and Consulting</li>
            </ul>
          </li>

          <li className="nav-list-item">
            <a className="nav-anchor" href="#">
              Contact
            </a>
            <span className="nav-number"></span>
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
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="7" stroke="#009ca6" strokeWidth="2" />
                <line
                  x1="14.4142"
                  y1="14"
                  x2="18"
                  y2="17.5858"
                  stroke="#009ca6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </nav>

      <div className="slider">
        <div className="slide-heading-container">
          <h1 className="slide-heading">{slides[index].heading}</h1>
        </div>

        <div className="slide-content">
          <button className="slider-button" onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="slider-button" onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;