import React, { useState } from "react";
export default function Unit(props) {
  let [unit, setUnit] = useState("metric");

  function getFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function getCelsuis(event) {
    event.preventDefault();
    setUnit("Celsuis");
  }
  function Fahrenheit() {
    return (props.temp * 9) / 5 + 32;
  }

  if (unit === "metric") {
    return (
      <h2>
        {props.Temp}{" "}
        <span className="celsuis">
          °C /{" "}
          <a href="/" onClick={getFahrenheit}>
            F
          </a>
        </span>
      </h2>
    );
  } else {
    return (
      <h2>
        {Fahrenheit()}{" "}
        <span className="celsuis">
          <a href="/" onClick={getCelsuis}>
            °C /{" "}
          </a>
          F
        </span>
      </h2>
    );
  }
}
