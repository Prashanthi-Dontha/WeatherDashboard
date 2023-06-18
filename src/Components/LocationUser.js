import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
function LocationUser({ weather: { name, country }, units }) {
  const [fetchedCity, setFetchedCity] = useState(name);
  const [city, setCity] = useState("");
  function citySearch() {
    console.log(city);
  }
  console.log(fetchedCity);
  return (
    <div className="flex md:flex-row flex-col items-center justify-between md:justify-normal">
      {/* <img src="./images/logo3.png" alt="logo" className=" w-36" /> */}
      <div className="flex items-center">
        <img
          src="./images/logo4.png"
          alt="logo"
          className="w-6 md:w-11 rounded-md "
        />
        <div className="flex flex-col  text-gray-50 md:font-bold font-semibold md:text-xl text-sm ml-1 md:w-48 w-28 -space-y-2 ">
          <p> The Weather</p>
          <p>Network</p>
        </div>
      </div>
      <div className=" text-white md:text-4xl text-3xl font-light mt-6 md:ml-16">
        {name} , {country}
      </div>
      {/* <div className="flex items-center ml-5">
        <input
          type="text"
          value={city}
          placeholder="search city"
          onChange={(e) => setCity(e.target.value)}
          className="outline-none h-8  px-2"
        />
        <button className="text-white ml-2" onClick={citySearch}>
          {<FaSearch />}
        </button>
      </div> */}
    </div>
  );
}

export default LocationUser;
