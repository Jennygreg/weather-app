import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import Weatherinfo from "./WeatherInfo";
export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [data, setData] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinate]);

  function forecastData(response) {
    setReady(true);
    setData(response.data.daily);
  }

  function loadData() {
    let Apikey = "tfo4bbbcafc5703e8a031a2da3b01a3a";
    let lat = props.coordinate.lat;
    let lon = props.coordinate.lon;
    let url = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${Apikey}`;
    axios.get(url).then(forecastData);
  }
  if (ready) {
    return (
      <div className="row">
        {data.map(function (forecast, index) {
          if (index > 0) {
            return (
              <div className="col-2 forecastDetail" key={index}>
                <Weatherinfo Detail={forecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return loadData();
  }
}
