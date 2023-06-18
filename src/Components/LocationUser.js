import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";

// For searching data through input box
function LocationSearch({ setCity }) {
  const [cityName, setCityName] = useState("");
  function citySearch() {
    if (cityName !== "") {
      setCity(cityName);
    }
  }
  return (
    <div className="flex items-center justify-center mt-8 md:mt-6">
      <input
        type="text"
        value={cityName}
        placeholder="Search for city"
        onChange={(e) => setCityName(e.target.value)}
        className="outline-none h-8 px-2 md:w-80"
      />
      <button className="text-white ml-2 h-8" onClick={citySearch}>
        {<FaSearch />}
      </button>
    </div>
  );
}

// Show location(name,country) on the screen
function LocationUser({ weather: { name, country } }) {
  return (
    <div className=" text-white md:text-6xl text-4xl font-light mt-5 mb-5 text-center">
      {name} , {country}
    </div>
  );
}

export default LocationUser;
export { LocationSearch };
