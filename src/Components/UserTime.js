import React from "react";

import moment from "moment";
import { Link } from "react-router-dom";
export default function UserTime() {
  return (
    // <div className=" font-light w-full grid grid-cols-2">
    <div className=" font-light w-full">
      <div className="text-xs md:text-base md:font-light">
        <p>{moment().format("LLLL")}</p>
      </div>

      {/* <div className="flex space-x-10 items-center">
        <div>
          <p>Short term weather forecast:</p>
        </div>

        <Link to="oneday">
          <button
            type="button"
            className="outline rounded-full  w-7 h-7  focus:bg-gray-50 focus:text-blue-600 focus:outline-none"
          >
            hr
          </button>
        </Link>
        <Link to="oneday">
          <button className="outline rounded-full  w-7 h-7  focus:bg-gray-50 focus:text-blue-600 focus:outline-none">
            1
          </button>
        </Link>
        <Link to="oneday">
          <button
            type="button"
            className="outline rounded-full  w-7 h-7 focus:bg-gray-50 focus:text-blue-600 focus:outline-none"
          >
            7
          </button>
        </Link>
        <Link to="oneday">
          <button
            type="button"
            className="outline rounded-full  w-7 h-7  focus:bg-gray-50 focus:text-blue-600 focus:outline-none"
          >
            14
          </button>
        </Link>
      </div> */}
    </div>
  );
}
