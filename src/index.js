import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import backgroundVid from "./image/BackgroundVid.mp4"
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <video autoPlay loop muted>
      <source src={backgroundVid} type="video/mp4"/>
    </video>
    <App city="Abuja" />
  </React.StrictMode>
);

reportWebVitals();
