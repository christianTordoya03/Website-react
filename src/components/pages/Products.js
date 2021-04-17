import React from "react";
import "../../App.css";
import "../../components/HeroSection.css";
import "../Cards.css";
import CardItem from "../CardItem";

const Products = () => {
  return (
    <div className="hero-container">
      <h1 className="products">PROPIEDADES DISPONIBLES</h1>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/angar.jpg"
                text="Listo para usar con Angares y oficina inscrito en registros públicos 1477 m2 zona industrial las piedritas Carabayllo información 943450491"
                path="/services"
              />
              <CardItem
                src="images/tc.png"
                text="Nos encargamos de sanear su inmueble ante registros públicos"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
