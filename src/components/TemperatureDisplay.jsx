import React from "react";

const TemperatureDisplay = ({ temperature, unit = "C" }) => {
  return (
    <div className="font-sans flex items-start">
      <span className="text-7xl">{temperature}</span>
      <span className="text-4xl font-semibold mt-1">°{unit}</span>
    </div>
  );
};

export default TemperatureDisplay;
