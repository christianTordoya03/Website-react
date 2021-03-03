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
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              // label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/card-2.png"
              text="Travel through the Islands of Bali in a Private Cruise"
              // label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/card-3.png"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              // label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/logo.png"
              text=""
              // label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/card-4.png"
              text="Ride through the Sahara Desert on a guided camel tour"
              // label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
