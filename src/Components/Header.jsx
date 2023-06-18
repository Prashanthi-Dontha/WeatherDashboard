import React from "react";

function Header() {
  return (
    <div className="flex items-center w-full xl:w-[100vh] xl:mx-auto">
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
  );
}

export default Header;
