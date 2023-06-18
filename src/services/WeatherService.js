import { Clock } from "react-live-clock";
import { DateTime } from "luxon";
const API_KEY = "a33cf4f3c4f67dd6ff17f95482ad199c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const BASE_URL1 = "https://api.openweathermap.org/data/2.5/weather?q";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log(url);
  return fetch(url).then((res) => res.json());
};

// const getWeatherData1 = (city) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&units=metric&appid=${API_KEY}`;
//     console.log(url);
//     return fetch(url).then((res) => res.json());
//   };
const getWeatherData1 = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&units=metric&appid=${API_KEY}`;
  // console.log(url);
  const reqData = fetch(url)
    .then((res) => res.json())
    .catch((error) => error.response);
  return reqData;
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
const formatCurrentWeather1 = (data) => {
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
// getFormattedWeatherData1

const getFormattedWeatherData1 = async (city) => {
  //   console.log(city.city + "My city");
  try {
    const formattedCurrentWeather1 = await getWeatherData1(city).then(
      formatCurrentWeather1
    );
    return formattedCurrentWeather1;
  } catch (error) {
    console.log(error);
  }
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, LLLL dd  yyyy hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
// weather images from api
const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { iconUrlFromCode, getFormattedWeatherData1, formatToLocalTime };
