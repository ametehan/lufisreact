import React from "react";
import "./CardStyle.css";

function Card() {
  return (
    <div className="wrapper">
      <SauerstoffApp />
      <LautstaerkeApp />
      <TemperaturApp />
      <QualitaetApp />
      <FeuchtigkeitApp />
    </div>
  );
}

function SauerstoffApp() {
  return (
    <div className="card">
      <div className="card__body">
        <img src="https://media.istockphoto.com/vectors/thermometer-icon-hot-temperature-vector-vector-id852156476?b=1&k=20&m=852156476&s=170667a&w=0&h=9zZF4XN91zH_bq_eVvDC-LEJhGx7c1AMZMikjnvAXT8=" />
        <h2 className="card_title">Sauerstoff</h2>
        <p className="card__description">Zeigt den Sauerstoffgehalt an!</p>
      </div>
      <button className="card__btn">Zeig</button>
    </div>
  );
}

function LautstaerkeApp() {
  return (
    <div className="card">
      <div className="card__body">
        <img src="https://media.istockphoto.com/vectors/thermometer-icon-hot-temperature-vector-vector-id852156476?b=1&k=20&m=852156476&s=170667a&w=0&h=9zZF4XN91zH_bq_eVvDC-LEJhGx7c1AMZMikjnvAXT8=" />
        <h2 className="card_title">Lautstärke</h2>
        <p className="card__description">Zeigt die Lautstärke an!</p>
      </div>
      <button className="card__btn">Zeig</button>
    </div>
  );
}

function TemperaturApp() {
  return (
    <div className="card">
      <div className="card__body">
        <img src="https://media.istockphoto.com/vectors/thermometer-icon-hot-temperature-vector-vector-id852156476?b=1&k=20&m=852156476&s=170667a&w=0&h=9zZF4XN91zH_bq_eVvDC-LEJhGx7c1AMZMikjnvAXT8=" />
        <h2 className="card_title">Temperatur</h2>
        <p className="card__description">Zeigt die Temperatur an!</p>
      </div>
      <button className="card__btn">Zeig</button>
    </div>
  );
}

function QualitaetApp() {
  return (
    <div className="card">
      <div className="card__body">
        <img src="https://media.istockphoto.com/vectors/thermometer-icon-hot-temperature-vector-vector-id852156476?b=1&k=20&m=852156476&s=170667a&w=0&h=9zZF4XN91zH_bq_eVvDC-LEJhGx7c1AMZMikjnvAXT8=" />
        <h2 className="card_title">Luftqualität</h2>
        <p className="card__description">Zeigt die Luftqualität an!</p>
      </div>
      <button className="card__btn">Zeig</button>
    </div>
  );
}

function FeuchtigkeitApp() {
  return (
    <div className="card">
      <div className="card__body">
        <img src="https://media.istockphoto.com/vectors/thermometer-icon-hot-temperature-vector-vector-id852156476?b=1&k=20&m=852156476&s=170667a&w=0&h=9zZF4XN91zH_bq_eVvDC-LEJhGx7c1AMZMikjnvAXT8=" />
        <h2 className="card_title">Luftfeuchtigkeit</h2>
        <p className="card__description">Zeigt die Luftfeuchtigkeit an!</p>
      </div>
      <button className="card__btn">Zeig</button>
    </div>
  );
}

export default Card;
