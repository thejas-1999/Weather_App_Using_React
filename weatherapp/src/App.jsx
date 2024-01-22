import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c6211aa999dcaacbaec4e10e34f8efc4";

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location..."
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Tokyo</p>
          </div>
          <div className="temp">
            <h1>65°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p className="bold">65°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12MPH</p>
            <p>wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
