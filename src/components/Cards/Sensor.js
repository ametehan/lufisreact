import "./CardStyle.css";

function Sensor(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.image} />
        <h2 className="card_title">{props.name}</h2>
        <p className="card__description">{props.desc}</p>
      </div>
      <button className="card__btn">Zeig</button>
    </div>
  );
}

export default Sensor;
