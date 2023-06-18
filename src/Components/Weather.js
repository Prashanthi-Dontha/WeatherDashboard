import React from "react";
import { iconUrlFromCode } from "../services/WeatherService";
import moment from "moment";

export default function Weather({
  weather: {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    speed,
    dt,
    sunrise,
    sunset,
    details,
    icon,
    timezone,
    description,
    visibility,
    pressure,
  },
}) {
  return (
    <div className="flex flex-col w-full box-border">
      <div className=" flex flex-row items-center justify-between">
        <img src={iconUrlFromCode(icon)} alt="icons" className="md:w-40 w-20" />
        <p className=" md:text-7xl text-4xl font-light">
          {Math.trunc(temp)} <sup>°C</sup>
        </p>
        <div className=" font-extralight flex flex-col items-center">
          <p className="lg:text-xl"> Feels like: </p>
          <p className=" font-normal md:text-xl text-center md:font-semibold">
            {Math.trunc(feels_like)} <sup>°C</sup>
          </p>
        </div>
      </div>
      <div className="text-center md:text-3xl lg:text-4xl text-xl lg:font-semibold md:font-normal">
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </div>

      <div className=" box-border grid grid-cols-2 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-2 md:mt-10 mt-3 gap-6 md:gap-x-9 md:gap-y-6 md:text-xl text-sm">
        <div className="weather-data shadow-xl rounded-md md:p-8 md:w-52">
          <p>wind</p>
          <p className=" font-semibold">{`${Math.trunc(speed * 3.6)} km/h`}</p>
        </div>
        <div className="weather-data shadow-xl rounded-md md:p-8 md:w-52">
          <p>Humidity</p>
          <p className=" font-semibold">{`${Math.trunc(humidity)}%`}</p>
        </div>
        <div className="weather-data shadow-xl rounded-md md:p-8 md:w-52">
          <p>Max/Min</p>
          <p className=" font-semibold">
            {`${Math.trunc(temp_max)}°`} / {`${Math.trunc(temp_min)}°`}
          </p>
        </div>

        <div className=" weather-data shadow-xl rounded-md md:p-8 md:w-52">
          <p>Pressure</p>
          <p className=" font-semibold">{`${pressure.toFixed() / 10} kPa`}</p>
        </div>
        <div className="  weather-data shadow-xl rounded-md md:p-8 md:w-52">
          <p>visibility</p>
          <p className=" font-semibold">{`${(
            visibility / 1000
          ).toFixed()} km`}</p>
        </div>
        <div className=" weather-data shadow-xl rounded-md md:p-8 md:w-52">
          <p>sunrise/sunset</p>
          <p className=" font-semibold">
            {moment(sunrise * 1000).format("HH:mm")} /{" "}
            {moment(sunset * 1000).format("HH:mm")}
          </p>
        </div>
      </div>
    </div>
  );
}
