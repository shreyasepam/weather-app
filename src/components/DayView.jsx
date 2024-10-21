import React from "react";
import dayjs from "dayjs";
import TemperatureDisplay from "./TemperatureDisplay";

export default function DayView({ dateString, image, temperature }) {
    const date = dayjs(dateString);
    const day = date.format("dddd");
  return (
    <div className="w-[100px] bg-white rounded-md shadow-md flex flex-col items-center p-4 justify-between">
      <p className="text-md">{day}</p>
      <img className="w-[48px] h-[48px] object-scale-down" src={image} />
      <div className="flex">
      <TemperatureDisplay temperature={"100"} size={{temp:"md", unit:"xs"}} />
      -
      <TemperatureDisplay temperature={"100"} size={{temp:"md", unit:"xs"}} />
      </div>
    </div>
  );
}
