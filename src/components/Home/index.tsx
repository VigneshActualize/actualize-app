import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

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

const Home = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 4;
  const extendedSlides = [...slides, ...slides.slice(0, visibleCount)];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev + visibleCount >= slides.length) {
          return 0;
        }
        return prev + visibleCount;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="div-container">
      <Header />
      <div className="home-two">
        <div
          className="home-two-con"
          style={{
            transform: `translateX(-${(100 / visibleCount) * current}%)`,
            transition: "transform 1s ease-in-out",
            width: `${(extendedSlides.length / visibleCount) * 100}%`,
          }}
        >
          {extendedSlides.map((slide, idx) => (
            <div className="home-two-card" key={idx}>
              <img src={slide.imageUrl} alt={slide.altText} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
