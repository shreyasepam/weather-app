import React from "react";

const TemperatureDisplay = ({ temperature, unit = "C", size = {temp:"text-7xl", unit:"text-4xl"} }) => {
  return (
    <div className="font-sans flex items-start">
      <span className={`${size.temp}`}>{temperature}</span>
      <span className={`${size.unit} font-semibold`}>°{unit}</span>
    </div>
  );
};

export default TemperatureDisplay;
