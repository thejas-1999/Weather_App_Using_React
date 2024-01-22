import { useState } from "react";
import axios from "axios";

function App() {
  /* const url =
    "https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=c6211aa999dcaacbaec4e10e34f8efc4"; */

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Tokyo</p>
          </div>
          <div className="temp">
            <h1>65F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12Mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
