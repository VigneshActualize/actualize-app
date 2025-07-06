import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";
import { Link } from "react-router-dom";

const bgSlides = [
  {
    video: "/navbg1video.mp4",
    heading: "Digital Transformation",
  },
  {
    video: "/navbg2video.mp4",
    heading: "Staffing and Consulting ",
  },
  {
    video: "/navbg3video.mp4",
    heading: "Engineering Services",
  },
];

const slides = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShfCy1c55mmznhg9RiAjxWXlisPufMCcy_Rw&s",
    altText: "HAL",
  },
  {
    imageUrl: "https://electricenergyonline.com/images_logo/banniere_27675.jpg",
    altText: "Mitsubishi Hitachi Power Systems",
  },
  {
    imageUrl: "https://welovefire.com/wp-content/uploads/2019/07/hpc-logo.png",
    altText: "HPC Fire Inspired",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eHiym7Mw5OIsKEJqiepwYDDUQRBHF0cvlA&s",
    altText: "Sartorius",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ih317_NuPut2ptymxzxZ5yqL3ixP7ngsHw&s",
    altText: "Atlas Copco",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4YkASphCvtdf0k_beTJVqRHMxPZAcJ5_RA&s",
    altText: "ABB",
  },
  {
    imageUrl:
      "https://www.drcipy.com/wp-content/uploads/2021/05/Tata-Motors.png",
    altText: "Tata Motors",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Marcopolo_Logo.pdf/page1-1200px-Marcopolo_Logo.pdf.jpg",
    altText: "Tata Marco Polo",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8g_tBZvhXJoUqKwdw6SiDEK3Cp58kZSIiWw&s",
    altText: "Flowserve",
  },
  {
    imageUrl:
      "https://actualize.co.in/wp-content/uploads/2023/05/hartgel-1.png",
    altText: "Hartzell",
  },
  {
    imageUrl: "https://actualize.co.in/wp-content/uploads/2023/05/OIP-1.jpg",
    altText: "Eprico",
  },
  {
    imageUrl:
      "https://actualize.co.in/wp-content/uploads/2023/05/Bharat-electronics-1.png",
    altText: "Bharath Electronics",
  },
];

const cards = [
  {
    bgImgUrl:
      "https://actualize.co.in/wp-content/uploads/2023/05/7-1024x683.jpg",
    heading: "Heavy Engineering",
  },
  {
    bgImgUrl:
      "https://uwm.edu/engineering/wp-content/uploads/sites/537/2021/07/CSI-image-A-750-x-500.png",
    heading: "Industrial Engineering",
  },
  {
    bgImgUrl:
      "https://www.autotrainingcentre.com/wp-content/uploads/2021/01/Jan-28-careers-in-the-auto-industry.jpg",
    heading: "Automotive Engineering",
  },
  {
    bgImgUrl:
      "https://www.stonewallco.com/hubfs/Process%20Equipment%20-%20PES.png",
    heading: "Process Engineering",
  },
];

const zeroCards = [
  {
    bgColor: "#e0f0ff",
    borderColor: "#90caf9",
    heading: "Engineering Services",
    description:
      "Providing comprehensive and innovative engineering solutions to meet the diverse needs of clients, optimizing efficiency and driving technological advancements.",
    listItems: [
      "Mechanical & Electrical Engineering Solutions",
      "Product Design, Development & Value Engineering",
      "Piping, Structural & HVAC Design",
      "Electrical Design, PLC, HMI & SCADA Systems",
    ],
    textColor: "#2368e9",
  },
  {
    bgColor: "#fff3d5",
    borderColor: "#ffe0a3",
    heading: "Digital Transformation",
    description:
      "Accelerating the digital transformation of industries by integrating advanced technologies, data-driven insights, and optimized processes to drive innovation, efficiency, and competitive advantage.",
    listItems: [
      "Enhance decision-making and productivity using data insights.",
      "Tailored solutions for efficient data management.",
      "Extract valuable insights to drive business growth.",
      "Upgrade business intelligence and data systems.",
    ],
    textColor: "#ff6262",
  },
  {
    bgColor: "#e6ffea",
    borderColor: "#81c784",
    heading: "Staffing and Consulting",
    description:
      "Empowering organizations through tailored staffing solutions and expert consulting services to optimize workforce performance, adapt to evolving market demands, and achieve sustainable growth",
    listItems: [
      "Provide expert staffing solutions to meet your business needs.",
      "Offer specialized consulting for process optimization and efficiency.",
      "Help businesses scale by sourcing top talent across various industries.",
      "Offer customized recruitment strategies for long-term success.",
    ],
    textColor: "#2ccc61",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [countries, setCountries] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [projects, setProjects] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateNumbers();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, [hasAnimated]);

  const animateNumbers = () => {
    let countriesInterval = setInterval(() => {
      setCountries((prev) => {
        if (prev < 9) return prev + 1;
        clearInterval(countriesInterval);
        return prev;
      });
    }, 80);

    let customersInterval = setInterval(() => {
      setCustomers((prev) => {
        if (prev < 80) return prev + 1;
        clearInterval(customersInterval);
        return prev;
      });
    }, 20);

    let projectsInterval = setInterval(() => {
      setProjects((prev) => {
        if (prev < 10000) return prev + 100;
        clearInterval(projectsInterval);
        return prev;
      });
    }, 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % bgSlides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % bgSlides.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + bgSlides.length) % bgSlides.length
    );
  };

  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="nav-container">
          <video
            key={bgSlides[index].video}
            className="background-video"
            src={bgSlides[index].video}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="slider">
            <div className="slide-heading-container">
              <h1 className="slide-heading">{bgSlides[index].heading}</h1>
              <button className="explore-btn">Explore</button>
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

        <div className="home-zero">
          <h1 className="home-zero-heading" style={{ color: "#eb2128" }}>
            WHAT WE SERVE
          </h1>
          {zeroCards.map((card, idx) => (
            <div
              className="home-zero-card"
              style={{ backgroundColor: `${card.bgColor}` }}
              key={idx}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = card.borderColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              <h2 className="card-heading">{card.heading}</h2>
              <p className="card-description">{card.description}</p>
              <ul className="home-zero-list">
                {card.listItems.map((item, index) => (
                  <li
                    key={index}
                    className="home-zero-list-item"
                    style={{ color: card.textColor }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="home-one">
          <h1 className="home-zero-heading" style={{ color: "#69bd45" }}>
            WHO WE SERVE
          </h1>
          <Slider {...carouselSettings}>
            {slides.map((slide, idx) => (
              <img key={idx} src={slide.imageUrl} alt={slide.altText} />
            ))}
          </Slider>
        </div>

        <div className="home-text">
          <h1 className="home-zero-heading" style={{ color: "#2989ca" }}>
            WHY WE SERVE
          </h1>
          <div className="home-text-content">
            <p>
              At Actualize, we believe that every individual and organization
              holds untapped potential waiting to be realized. Our mission is to
              serve as a catalyst for growth, transformation, and lasting
              impact—helping our clients move from vision to reality. We’re not
              just problem-solvers; we’re partners in progress, driven by a deep
              purpose to empower others through meaningful innovation and
              practical solutions.
            </p>
            <hr />
            <p>
              We serve because we care deeply about outcomes that matter.
              Whether it's uplifting a community, accelerating a business, or
              guiding personal development, we are motivated by the difference
              we can make. Our work is rooted in integrity, collaboration, and a
              shared commitment to creating a better future—for our clients, our
              team, and the world around us.
            </p>
          </div>
        </div>

        <div className="home-two">
          <h1 className="home-zero-heading" style={{ color: "#eb2128" }}>
            WHERE WE SERVE
          </h1>
          <div className="home-two-con">
            {cards.map((card) => (
              <div
                className="home-two-card"
                style={{ backgroundImage: `url(${card.bgImgUrl})` }}
              >
                <h1 className="home-two-heading">{card.heading}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="about-us-section" id="about-us" ref={aboutRef}>
          <h1 className="home-zero-heading" style={{ margin: "0px" }}>
            ABOUT US
          </h1>

          <p>
            We bring your ideas to life with our expertise and industry-leading
            solutions, ensuring tangible outcomes that drive your business
            towards success.
          </p>

          <Link to="/about-us" style={{ textDecoration: "none" }}>
            <button
              className="about-us-know-more-btn"
              style={{
                margin: "18px auto 28px auto",
                display: "block",
                background: "#2989ca",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "0.7rem 2.2rem",
                fontWeight: 600,
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Know More
            </button>
          </Link>

          <div className="about-us-stats">
            <div
              className="about-us-stats-card"
              style={{ backgroundColor: "#e0f0ff", borderColor: "#90caf9" }}
            >
              <h1 style={{ color: "#69bd45" }}>
                {countries} <span>+</span>
              </h1>

              <p>Countries Served</p>
            </div>
            <div
              className="about-us-stats-card"
              style={{ backgroundColor: "e0f0ff", borderColor: "#ffe0a3" }}
            >
              <h1 style={{ color: "#eb2128" }}>
                {customers} <span>+</span>
              </h1>
              <p>Customers</p>
            </div>
            <div
              className="about-us-stats-card"
              style={{ backgroundColor: "#e6ffea", borderColor: "#81c784" }}
            >
              <h1 style={{ color: "#2989ca" }}>
                {projects.toLocaleString()} <span>+</span>
              </h1>
              <p>Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
