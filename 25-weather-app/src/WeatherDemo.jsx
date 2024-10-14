// import React from 'react'
import { useState } from "react";
import axios from "axios";
function WeatherDemo() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const changeCity = (event) => {
    setCity(event.target.value);
  };

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?q={city}&appid={'cfc9e7c94bb8b66f704ec1f5ed1d6a87'}`
      );
      // setCity(response);
      // console.log(response);
      setWeather(response);
    } catch (error) {
      console.log("weather get error", error);
    }
  };
  const checkWeather = () => {
    getWeather();
  };
  return (
    <div>
      <h1>Weather</h1>
      <input
        type="text"
        placeholder="Enter your city name"
        value={city}
        onChange={changeCity}
      ></input>
      <br></br>
      <br></br>
      <button onClick={checkWeather}>Add name</button>
      {weather && (
        <>
          <div>
            <h1>{weather.data.name}</h1>
            
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherDemo;
