import React from "react";
import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
// Import pages

import LocationUser from "./Components/LocationUser";
import getFormattedWeatherData from "./services/WeatherService";
import UserTime from "./Components/UserTime";
import Weather from "./Components/Weather";
import HourlyWeather from "./Components/HourlyWeather";

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLong] = useState("");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    if (lat && lon) {
      const fetchWeather = async () => {
        const data = await getFormattedWeatherData({ lat, lon, units }).then(
          (res) => setWeather(res)
        );
      };
      fetchWeather();
    }
  }, [lat, lon]);
  console.log(weather);
  return (
    <div className="h-screen font-['Poppins'] bg-image box-border md:p-10 pt-10 px-5">
      {weather && (
        <div>
          <LocationUser weather={weather} units={units} />
          <div className=" my-12  text-gray-100">
            <UserTime />
            {/* <Weather weather={weather} /> */}
            <Routes>
              <Route path="oneday" element={<HourlyWeather />} />
              <Route path="/" element={<Weather weather={weather} />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
// box-border p-10
