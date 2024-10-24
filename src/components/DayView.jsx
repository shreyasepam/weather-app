import React from "react";
import dayjs from "dayjs";
import TemperatureDisplay from "./TemperatureDisplay";

export default function DayView({ dateString, image, fromTemp, toTemp }) {
  const date = dayjs(dateString);
  const day = date.format("dddd");
  console.log("qwertyuij",dayjs(dateString).format("YYYY-MM-DD"), dayjs().format("YYYY-MM-DD") )
  const current =
    dayjs(dateString).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD");
  return (
    <div
      className={`w-[100px] bg-white rounded-md shadow-md flex flex-col items-center p-4 justify-between ${
        current ? "outline outline-offset-2 outline-2 outline-gray-400" : ""
      }`}
    >
      <p className="text-md">{day}</p>
      <img className="w-[48px] h-[48px] object-scale-down" src={image} />
      <div className="flex">
        <TemperatureDisplay
          temperature={fromTemp}
          size={{ temp: "text-md", unit: "text-xs" }}
        />
        {" - "}
        <TemperatureDisplay
          temperature={toTemp}
          size={{ temp: "text-md", unit: "text-xs" }}
        />
      </div>
    </div>
  );
}
