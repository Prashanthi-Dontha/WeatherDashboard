import React from "react";

import moment from "moment";

export default function UserTime() {
  return (
    <div className=" font-light w-60">
      <p>{moment().format("LLLL")}</p>
    </div>
  );
}
