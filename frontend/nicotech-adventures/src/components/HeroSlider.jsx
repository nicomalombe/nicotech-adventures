import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../css/heroslider.css";

import { Link } from "react-router-dom";

// =========================
// Desktop Images
// =========================
import webDev from "../assets/slider/web-development.png";
import mobileApp from "../assets/slider/mobile-app.png";
import aiSystem from "../assets/slider/ai-system.png";
import machineLearning from "../assets/slider/machine-learning.png";
import dataScience from "../assets/slider/data-science.png";
import combined from "../assets/slider/combine.png";

// =========================
// Mobile Images
// =========================
import webMobile from "../assets/slider/web-mobile.png";
import mobileMobile from "../assets/slider/mobile-mobile.png";
import aiMobile from "../assets/slider/ai-mobile.png";
import machineMobile from "../assets/slider/machine-learning-mobile.png";
import dataMobile from "../assets/slider/data-science-mobile.png";
import combinedMobile from "../assets/slider/combined-mobile.png";

function HeroSlider() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slides = [
    {
      desktop: webDev,
      mobile: webMobile,
      title: "Web Development Solutions",
      description:
        "We design modern websites, business portals and enterprise web applications that help organizations grow.",
    },

    {
      desktop: mobileApp,
      mobile: mobileMobile,
      title: "Mobile App Development",
      description:
        "Native Android and cross-platform mobile applications built with performance, security and scalability in mind.",
    },

    {
      desktop: aiSystem,
      mobile: aiMobile,
      title: "Artificial Intelligence",
      description:
        "Transform your business using AI automation, intelligent assistants and smart decision-making systems.",
    },

    {
      desktop: machineLearning,
      mobile: machineMobile,
      title: "Machine Learning",
      description:
        "Predict trends, automate workflows and build intelligent models using modern machine learning technologies.",
    },

    {
      desktop: dataScience,
      mobile: dataMobile,
      title: "Data Science & Analytics",
      description:
        "Turn raw business data into powerful insights through dashboards, analytics and predictive intelligence.",
    },

    {
      desktop: combined,
      mobile: combinedMobile,
      title: "Integrated Solutions",
      description:
        "Combine Web Development, Mobile Apps, Artificial Intelligence, Machine Learning and Data Science into one powerful digital solution.",
    },
  ];

  return (
    <section className="hero-slider">

      {/* DEBUG LABEL - REMOVE LATER */}
      <div
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          zIndex: 9999,
          background: "#fff",
          color: "#e60000",
          padding: "8px 14px",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
    
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        loop={true}
        speed={1000}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
 <div className="hero-slide">

  <img
    src={isMobile ? slide.mobile : slide.desktop}
    alt={slide.title}
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: isMobile ? "contain" : "cover",
      zIndex: 0
    }}
  />
  
              <div className="hero-overlay">
                <div className="hero-content">

                  <span className="hero-badge">
                    🚀 Innovation • AI • Web • Mobile
                  </span>

                  <h1>{slide.title}</h1>

                  <p>{slide.description}</p>

                  <div className="hero-buttons">

                    <Link
                      to="/services"
                      className="hero-btn primary"
                    >
                      Explore Services
                    </Link>

                    <Link
                      to="/request"
                      className="hero-btn secondary"
                    >
                      Request a Quote
                    </Link>

                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default HeroSlider;