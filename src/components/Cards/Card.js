import React from "react";
import "./CardStyle.css";
import Sensor from "./Sensor.js";
import Grid from "@mui/material/Grid";

function Card() {
  return (
    <div className="wrapper">
      <Grid container spacing={1.5}>
        <Grid item xs={10} md={4} lg={2.4}>
          <Sensor
            image={
              "https://media.istockphoto.com/vectors/thermometer-icon-hot-temperature-vector-vector-id852156476?b=1&k=20&m=852156476&s=170667a&w=0&h=9zZF4XN91zH_bq_eVvDC-LEJhGx7c1AMZMikjnvAXT8="
            }
            name="Oxygen"
            desc="Shows the current CO² status in the room"
          />
        </Grid>
        <Grid item xs={10} md={4} lg={2.4}>
          <Sensor
            image={
              "https://media.istockphoto.com/vectors/thermometer-icon-hot-temperature-vector-vector-id852156476?b=1&k=20&m=852156476&s=170667a&w=0&h=9zZF4XN91zH_bq_eVvDC-LEJhGx7c1AMZMikjnvAXT8="
            }
            name="Sound"
            desc="Shows how loud it is in the room"
          />
        </Grid>
        <Grid item xs={10} md={4} lg={2.4}>
          <Sensor
            image={
              "https://media.istockphoto.com/vectors/thermometer-icon-hot-temperature-vector-vector-id852156476?b=1&k=20&m=852156476&s=170667a&w=0&h=9zZF4XN91zH_bq_eVvDC-LEJhGx7c1AMZMikjnvAXT8="
            }
            name="Temperature"
            desc="Shows the current temperature in the room"
          />
        </Grid>
        <Grid item xs={10} md={4} lg={2.4}>
          <Sensor
            image={
              "https://media.istockphoto.com/vectors/thermometer-icon-hot-temperature-vector-vector-id852156476?b=1&k=20&m=852156476&s=170667a&w=0&h=9zZF4XN91zH_bq_eVvDC-LEJhGx7c1AMZMikjnvAXT8="
            }
            name="Humidity"
            desc="Shows the humidity in the room"
          />
        </Grid>
        <Grid item xs={10} md={4} lg={2.4}>
          <Sensor
            image={
              "https://media.istockphoto.com/vectors/thermometer-icon-hot-temperature-vector-vector-id852156476?b=1&k=20&m=852156476&s=170667a&w=0&h=9zZF4XN91zH_bq_eVvDC-LEJhGx7c1AMZMikjnvAXT8="
            }
            name="Air quality"
            desc="Shows how fresh the air is in the room"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Card;
