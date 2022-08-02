import React from "react";
import { useApi } from "../../Context/apiContex";
import "./style.css";

export const CurrentWeather = () => {
  const weather = useApi()

  if (!weather.current){
    return <p>Loading...</p>
  }

  return (
    <section className="currentWeather">
      <div className="currentWeather--details">
        <h1>{weather.timezone}</h1>
        <h2>Temp: </h2>
        <span> {weather.current.temp}°</span>
        <ul className="currerWeather--stats">
          <li>
            <span>Wind:</span>
            <span> {weather.current.wind_speed} km/h</span>
          </li>
          <li>
            <span>Humidity:</span>
            <span> {weather.current.humidity} %</span>
          </li>
        </ul>
      </div>
      <div className="currentWeather--actual">
        {weather.current.weather.map((type) => (
          <h3 key={type.id}>{type.main}</h3>
        ))}
      </div>
      <div className="currentWeather--img">
        <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt="Weather" />
      </div>
    </section>
  );
};
