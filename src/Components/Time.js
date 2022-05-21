import { format } from "date-fns";
import React from "react";

const Time = () => {
  const time = format(new Date(), "PP");
  return <div>
      <p>{time}</p>
  </div>;
};

export default Time;
