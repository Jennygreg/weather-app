import React, { useState } from "react";
export default function Unit(props) {
  let [unit, setUnit] = useState("metric");

  function getFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function getCelsuis(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function Fahrenheit() {
    return Math.round((props.temp * 9) / 5 + 32);
  }

  if (unit === "metric") {
    return (
      <h2>
        {props.temp}{" "}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={getFahrenheit} className="text-decoration-none ">
            °F
          </a>
        </span>
      </h2>
    );
  } else {
    return (
      <h2>
        {Fahrenheit()}
        <span className="unit">
          <a href="/" onClick={getCelsuis} className="text-decoration-none ">
            °C |{" "}
          </a>
          °F
        </span>
      </h2>
    );
  }
}
