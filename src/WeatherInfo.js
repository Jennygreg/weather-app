import React from "react";
import "./WeatherInfo.css";
export default function Weatherinfo(props) {
  let iconUrl = props.Detail.condition.icon_url;

  console.log(props);
  function day() {
    let date = new Date(props.Detail.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }
  function Max() {
    let Maxtemp = Math.round(props.Detail.temperature.maximum);
    return Maxtemp;
  }
  function Min() {
    let Mintemp = Math.round(props.Detail.temperature.minimum);
    return Mintemp;
  }

  return (
    <div>
      <p>{day()}</p>
      <img
        src={iconUrl}
        alt={props.Detail.condition.description}
        className="images"
      />
      <p>
        °{Max()} °{Min()}
      </p>
    </div>
  );
}
