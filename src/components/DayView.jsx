import React from "react";

export default function DayView({ day, temperature }) {
  return (
    <div className="w-[75px] h-[100px] bg-white rounded-md shadow-md flex flex-col items-center p-4 justify-between">
      <p className="text-lg">{day}</p>
      <p className="text-xs">{temperature}</p>
    </div>
  );
}
