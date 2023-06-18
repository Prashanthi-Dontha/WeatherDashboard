import { Clock } from "react-live-clock";
import { DateTime } from "luxon";
const API_KEY = "a33cf4f3c4f67dd6ff17f95482ad199c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log(url);
  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  console.log(data);
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    wind: { speed },
    dt,
    name,
    visibility,
    timezone,
    sys: { country, sunrise, sunset },
    weather,
  } = data;

  const { main: details, description, icon } = weather[0];

  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    speed,
    dt,
    name,
    visibility,
    timezone,
    country,
    sunrise,
    sunset,
    details,
    icon,
    description,
  };
};

// getting properties
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};

// weather images from api
const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { iconUrlFromCode };
