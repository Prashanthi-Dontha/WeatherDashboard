import React from "react";

import moment from "moment";

export default function UserTime() {
  return (
    <div className=" font-light w-full text-sm md:text-lg lg:text-xl">
      <p>{moment().format("LLLL")}</p>
    </div>
  );
}
