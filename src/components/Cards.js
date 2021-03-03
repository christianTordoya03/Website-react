import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Necesitas vender, comprar o alquilar un inmueble en Lima Norte?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/card.png"
              text="Tenemos las herramientas y el conocimiento para cubrir su necesidad en el menor tiempo y con mayor margen de utilidad"
              path="/services"
            />
            <CardItem
              src="images/card-2.png"
              text="Nos encargamos de sanear su inmueble ante registros públicos"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/card-3.png"
              text="Inscripción de la edificación en registros públicos sin que pague multas"
              path="/services"
            />
            <CardItem
              src="images/logo.png"
              text="Profesionales especializados en superar tus expectativas"
              path="/products"
            />
            <CardItem
              src="images/card-4.png"
              text="Conoce los beneficios de la titulación de un inmueble"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
