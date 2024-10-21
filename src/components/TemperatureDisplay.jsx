import React from "react";

const TemperatureDisplay = ({ temperature, unit = "C", size = {temp:"7xl", unit:"4xl"} }) => {
  return (
    <div className="font-sans flex items-start">
      <span className={`text-${size.temp}`}>{temperature}</span>
      <span className={`text-${size.unit} font-semibold`}>°{unit}</span>
    </div>
  );
};

export default TemperatureDisplay;
