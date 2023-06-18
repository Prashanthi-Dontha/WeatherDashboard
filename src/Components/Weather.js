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
    <div className="flex flex-col w-[90vh]  box-border">
      <div className=" flex flex-row items-center justify-between ">
        <img src={iconUrlFromCode(icon)} alt="icons" className="w-40" />
        <p className=" text-7xl font-light">
          {Math.trunc(temp)} <sup>°C</sup>
        </p>
        <div className=" font-extralight flex flex-col items-center">
          <p> Feels like: </p>
          <p className=" font-normal text-xl text-center">
            {Math.trunc(feels_like)} <sup>°C</sup>
          </p>
        </div>
      </div>
      <div className="text-center text-3xl font-semibold">
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </div>
      <div className=" flex flex-col mt-6 space-y-5">
        <div className="flex flex-row justify-between ">
          <div className=" weather-data shadow-xl rounded-md">
            <p>wind</p>
            <p>{`${Math.trunc(speed)} km/h`}</p>
          </div>
          <div className="  weather-data shadow-xl rounded-md">
            <p>Humidity</p>
            <p>{`${Math.trunc(humidity)}%`}</p>
          </div>
          <div className=" weather-data shadow-xl rounded-md">
            <p>Max/Min</p>
            <p>
              {`${Math.trunc(temp_max)}°`} / {`${Math.trunc(temp_min)}°`}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between ">
          <div className=" weather-data shadow-xl rounded-md">
            <p>Pressure</p>
            <p>{`${pressure.toFixed() / 10} kPa`}</p>
          </div>
          <div className="  weather-data shadow-xl rounded-md">
            <p>visibility</p>
            <p>{`${visibility.toFixed()} km`}</p>
          </div>
          <div className=" weather-data shadow-xl rounded-md">
            <p>sunrise/sunset</p>
            <p>
              {moment(sunrise * 1000).format("HH:mm")} /{" "}
              {moment(sunset * 1000).format("HH:mm")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
