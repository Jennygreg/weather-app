import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./App.css";
import Time from "./time.js";
import TempUnit from "./TempUnit";

function App(props) {
  const [city, setCity] = useState(props.city);
  const [WeatherData, setWeatherData] = useState({ ready: false });
  const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  function searchCity(response) {
    setWeatherData({
      ready: true,
      Name: response.data.name,
      Temp: Math.round(response.data.main.temp),
      Humidity: response.data.main.humidity,
      Pressure: response.data.main.pressure,
      MaxTemp: Math.round(response.data.main.temp_max),
      MinTemp: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      Timestamp: new Date(response.data.dt * 1000),
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
    });
  }

  function Search() {
    const Apikey = "6caa6b54cfc577ffc9ddc75950d7efc3";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=${unit}`;
    axios.get(url).then(searchCity);
  }
  function Submit(event) {
    event.preventDefault();
    Search();
  }
  function getCity(event) {
    setCity(event.target.value);
  }
  if (WeatherData.ready) {
    return (
      <div className="container">
        {" "}
        <div className="App">
          <form onSubmit={Submit}>
            <input
              type="search"
              placeholder="Search a city..."
              className="Search"
              onChange={getCity}
            />
            <input type="submit" value="Search" className="Submit" />
          </form>
          <div className="location">
            <h1>{WeatherData.Name}</h1>
            <Time timeStamp={WeatherData.Timestamp} />{" "}
            <p className="fs-5 mt-0 text-capitalize">
              {WeatherData.description}{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-6">
              {WeatherData.iconUrl}
              <TempUnit temp={WeatherData.Temp} />
            </div>
            <div className="col-6">
              <ul className="list-unstyled text-center">
                <li>Pressure: {WeatherData.Pressure}</li>
                <li>
                  Humidity: <span> {WeatherData.Humidity} %</span>
                </li>
                <li>
                  Wind:<span> {WeatherData.wind} Km/h</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="forecast">
            {days.map(function (day, index) {
              return (
                <div className="row forecast" key={index}>
                  <div className="col-2 p-0 m-0 text-center">
                    {WeatherData.iconUrl}
                    <p>{day}</p>
                    <p>
                      {WeatherData.MinTemp}/{WeatherData.MaxTemp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <small className="m-0 p-0">
          <a
            href="https://github.com/Jennygreg/weather-app"
            title="github acct"
            target="_blank"
            without
            rel="noreferrer"
          >
            Open Source code
          </a>{" "}
          by Jennifer
        </small>
      </div>
    );
  } else {
    return Search();
  }
}

export default App;
