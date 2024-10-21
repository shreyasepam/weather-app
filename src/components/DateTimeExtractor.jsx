import React from "react";
import dayjs from "dayjs";

const DateTimeExtractor = ({ dateString }) => {
  const date = dayjs(dateString);

  const time = date.format("HH:mm");
  const day = date.format("dddd");

  return (
    <div className="mt-4">
      <p className="font-medium text-lg">
        {day}, <span className="font-normal text-gray-400">{time}</span>
      </p>
    </div>
  );
};

export default DateTimeExtractor;
