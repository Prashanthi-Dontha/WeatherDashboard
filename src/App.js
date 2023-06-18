import React from "react";
import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";

// Import pages

import LocationUser, { LocationSearch } from "./Components/LocationUser";
import getFormattedWeatherData from "./services/WeatherService";
import UserTime from "./Components/UserTime";
import Weather from "./Components/Weather";
import HourlyWeather from "./Components/HourlyWeather";
import { getFormattedWeatherData1 } from "./services/WeatherService";
import Header from "./Components/Header";

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [city, setCity] = useState("");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const geolocationAPI = navigator.geolocation;
    const getUserCoordinates = () => {
      if (!geolocationAPI) {
        console.log("Geolocation API is not available in your browser!");
      } else {
        geolocationAPI.getCurrentPosition(
          (position) => {
            const { coords } = position;
            setLat(coords.latitude);
            setLon(coords.longitude);
            // codeLatLng(coords.latitude, coords.longitude);
          },
          (error) => {
            console.log("Something went wrong getting your position!");
          }
        );
      }
    };
    getUserCoordinates();
    // navigator.geolocation.getCurrentPosition((position) => {
    //   setLat(position.coords.latitude);
    //   setLon(position.coords.longitude);
    // });
    if (lat && lon && city === "") {
      const fetchWeather = async () => {
        const data = await getFormattedWeatherData({ lat, lon, units }).then(
          (res) => setWeather(res)
        );
      };
      fetchWeather();
    } else if (city !== "") {
      const fetchWeather = async () => {
        const data = await getFormattedWeatherData1({ city }).then((res) =>
          setWeather(res)
        );
      };
      fetchWeather();
    }
  }, [lat, lon, city]);
  console.log(weather);

  return (
    <div className="h-screen font-['Poppins'] bg-image box-border md:p-10 pt-10 px-5 md:pt-8 ld:pt-5">
      <div></div>
      <Header />
      <LocationSearch setCity={setCity} />
      {weather ? (
        <div className="text-gray-100  xl:w-[100vh] xl:mx-auto">
          <LocationUser
            weather={weather}
            units={units}
            setLat={setLat}
            setLon={setLon}
            setCity={setCity}
          />
          <UserTime weather={weather} />
          <Weather weather={weather} />
        </div>
      ) : (
        <div>
          <h1 className=" text-gray-100 mt-10 py-5 text-center w-full text-xl md:text-2xl lg:text-4xl">
            No Data found for {city}
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;

{
  /* <div className="text-gray-100">
<UserTime weather={weather} />
<Routes>
  <Route path="oneday" element={<HourlyWeather />} />
  <Route path="/" element={<Weather weather={weather} />} />
</Routes>
</div> */
}
