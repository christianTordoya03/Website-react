import React from "react";
import "../../App.css";
import "../../components/HeroSection.css";
import services from "../../images/tcserv.png";

const Services = () => {
  return (
    <div className="hero-container">
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/servicios.png"
                text="Listo para usar con Angares y oficina inscrito en registros públicos 1477 m2 zona industrial las piedritas Carabayllo información 943450491"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
