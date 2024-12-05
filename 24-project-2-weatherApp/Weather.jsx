// import React from "react";
import { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const APIkey = "3c237cb8596e930747e90a16cd87c63f";
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const fetchWeather = async () => {
    try {
      // const response = await axios.get(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={'a3dd3f4126ef7baa0b45d410fb78a2e9'} `
      // );

      const newRespo = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
      );
      console.log(newRespo, "NEWW");

      setWeather(newRespo);
    } catch (error) {
      console.log("api call", error);
    }
  };
  const handleClick = () => {
    fetchWeather();
  };

  return (
    <div style={{ backgroundColor: "pink" }}>
      <h1 style={{ backgroundColor: "black", color: "white" }}>Weather App</h1>

      <input
        type="text"
        placeholder="Enter yur city"
        value={city}
        onChange={handleCityChange}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "black",
          color: "white",
          border: "4px solid gray",
          padding: "5px",
        }}
      >
        Get Weather
      </button>
      {weather && (
        <>
          <div>
            <h1>{weather.data.name}</h1>
            <p>temp is {weather.data.main.temp}</p>
            <p>{weather.data.weather[0].description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;
