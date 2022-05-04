import React from "react";
import "./CardStyle.css";

function Card() {
  return (
    <div className="wrapper">
      <CardApp />
    </div>
  );
}

function CardApp() {
  return (
    <div className="card">
      <div className="card__body">
        <img src="https://media.istockphoto.com/vectors/thermometer-icon-hot-temperature-vector-vector-id852156476?b=1&k=20&m=852156476&s=170667a&w=0&h=9zZF4XN91zH_bq_eVvDC-LEJhGx7c1AMZMikjnvAXT8=" />
        <h2 className="card_title">Temperatur</h2>
        <p className="card__description">Zeigt die Temperatur an</p>
      </div>
      <button className="card__btn">Zeig</button>
    </div>
  );
}

export default Card;
