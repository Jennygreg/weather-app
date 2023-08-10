import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

function App(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  function searchCity(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      Name: response.data.name,
      Temp: response.data.main.temp,
      Humidity: response.data.main.humidity,
      Pressure: response.data.main.pressure,
      MaxTemp: response.data.main.temp_max,
      MinTemp: response.data.main.temp_min,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      Timestamp: response.data.dt,
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
    });
  }

  if (WeatherData.ready) {
    return (
      <div className="container">
        {" "}
        <div className="App">
          <form>
            <input
              type="search"
              placeholder="Search a city..."
              className="Search"
            />
            <input type="submit" value="Search" className="Submit" />
          </form>
          <div className="location">
            <h1>{WeatherData.Name}</h1>
            <p>
              Sat, 29 Jul, 2023 <br />
              <span>11:06</span>
            </p>
            <p className="fs-4 mt-0">{WeatherData.description} </p>
          </div>
          <div className="row">
            <div className="col-6">
              <ReactAnimatedWeather
                icon="CLOUDY"
                color="Black"
                size={50}
                animate={true}
              />{" "}
              <h2>{WeatherData.Temp} °C </h2>
            </div>
            <div className="col-6">
              <p>
                Humidity: <span>{WeatherData.Humidity}</span>
              </p>
              <p>
                Wind:<span> {WeatherData.wind} </span>
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
    const city = "Abuja";
    const Apikey = "6caa6b54cfc577ffc9ddc75950d7efc3";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${Apikey}&units=${unit}`;
    axios.get(url).then(searchCity);
    return "working on it";
  }
}

export default App;
