import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri"];
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
                <div className="col-2 ">
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
        <a href=".." title="github acct" target="_blank">
          Open Source code
        </a>{" "}
        by Jennifer
      </small>
    </div>
  );
}

export default App;
