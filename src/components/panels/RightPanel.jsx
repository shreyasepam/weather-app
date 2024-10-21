import React from "react";
import DayView from "../DayView";
import Input from "../Input";
import HighlightCard from "../HighlightCard";

export default function RightPanel() {
  return (
    <div className="w-4/6 h-full bg-gray-100 p-8">
      <Input />
      <div className="w-full flex justify-center gap-4 mt-6">
        {Array(5)
          .fill()
          .map((x) => (
            <DayView dateString={"2024-10-21"} temperature={"100.c - 400.c"} image={"//cdn.weatherapi.com/weather/64x64/day/113.png"} />
          ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold my-6">Highlights</h2>
        <div className="grid grid-cols-3 gap-4">
        {Array(6)
          .fill()
          .map((x) => (
            <HighlightCard
              name={"uV Index"}
              value={5}
              footerValue={"Average"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
