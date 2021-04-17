import React from "react";
import "../../App.css";
import "../../components/HeroSection.css";
import services from "../../images/tcserv.png";

const Services = () => {
  return (
    <div className="hero-container">
      <img src={services} alt="services" className="services--img" />
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
    </div>
  );
};

export default Services;
