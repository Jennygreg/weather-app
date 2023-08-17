import React, { useState } from "react";
import axios from "axios";
export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [data, setData] = useState(null);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  function forecastData(response) {
    setReady(true);
    setData(response.data.daily);
    console.log(response.data.daily);
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
      <div className="forecast">
        {days.map(function (day, index) {
          return (
            <div className="row forecast" key={index}>
              <div className="col-2 p-0 m-0 text-center">
                <p>{day}</p>

                <p>/</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return loadData();
  }
}
