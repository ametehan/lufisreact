import React from "react";
import "./Lautstaerke.css";

function LautstaerkeCard() {
  return (
    <div className="wrapper1">
      <CardApp />
    </div>
  );
}

function CardApp() {
  return (
    <div className="card">
      <div className="card__body">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Perchlorate-3D-balls.png/260px-Perchlorate-3D-balls.png" />
        <h2 className="card_title">Lautstärke</h2>
        <p className="card__description">Zeigt die Lautstärke an</p>
      </div>
      <button className="card__btn">Zeig</button>
    </div>
  );
}

export default LautstaerkeCard;
