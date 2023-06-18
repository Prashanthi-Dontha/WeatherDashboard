import React from "react";

function LocationUser({ weather: { name, country } }) {
  return (
    <div className="flex items-center ">
      {/* <img src="./images/logo3.png" alt="logo" className=" w-36" /> */}
      <div className="flex items-center">
        <img
          src="./images/logo4.png"
          alt="logo"
          className=" w-11 rounded-md "
        />
        <div className="flex flex-col text-white font-bold text-xl ml-1 w-48">
          <p> The Weather</p>
          <p>Network</p>
        </div>
      </div>
      <div className=" text-white text-4xl ml-16">
        {name}, {country}
      </div>
    </div>
  );
}

export default LocationUser;
