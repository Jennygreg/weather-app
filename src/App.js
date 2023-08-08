import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  const [city, setCity] = useState("");
  const [load, setLoad] = useState(false);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  function searchCity(response) {
    setLoad(true);
  }

  function search(event) {
    event.preventDefault;
    const Apikey = "6caa6b54cfc577ffc9ddc75950d7efc3";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&unit=${unit}`;
    axios.get(url).then(searchCity);
  }
  function getCity(event) {
    setCity(event.target.value);
  }
  if (load) {
    return (
      <div className="container">
        {" "}
        <div className="App">
          <form onSubmit={search}>
            <input
              type="search"
              placeholder="Search a city..."
              className="Search"
              onChange={getCity}
            />
            <input type="submit" value="Search" className="Submit" />
          </form>
          <div className="location">
            <h1>Abuja</h1>
            <p>
              Sat, 29 Jul, 2023 <br />
              <span>11:06</span>
            </p>
            <p className="fs-4 mt-0"> Mostly Cloud</p>
          </div>
          <div className="row">
            <div className="col-6">
              <ReactAnimatedWeather
                icon="CLOUDY"
                color="Black"
                size={50}
                animate={true}
              />{" "}
              <h2>26 °C </h2>
            </div>
            <div className="col-6">
              <p>
                Humidity: <span>60%</span>
              </p>
              <p>
                Wind:<span> 4km/h </span>
              </p>
            </div>
          </div>
          <div className="forecast">
            {days.map(function (day, index) {
              return (
                <div className="row forecast" key={index}>
                  <div className="col-2 p-0 m-0 text-center">
                    <ReactAnimatedWeather
                      icon="RAIN"
                      color="Black"
                      size={50}
                      animate={true}
                    />{" "}
                    <p>{day}</p>
                    <p>18°/28°</p>
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
    return "working on it";
  }
}

export default App;
