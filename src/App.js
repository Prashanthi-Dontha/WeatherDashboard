import React from "react";
import { useState, useEffect, createContext } from "react";

// Import pages

import LocationUser from "./Components/LocationUser";
import getFormattedWeatherData from "./services/WeatherService";
import UserTime from "./Components/UserTime";
import Weather from "./Components/Weather";

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
    <div className="h-screen font-['Poppins'] bg-image box-border p-10">
      {weather && (
        <div>
          <LocationUser weather={weather} />

          <div className=" my-12  text-gray-100">
            <UserTime />
            <Weather weather={weather} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
