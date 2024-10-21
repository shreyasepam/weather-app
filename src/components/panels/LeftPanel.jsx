import React from "react";
import TemperatureDisplay from "../TemperatureDisplay";
import DateTimeExtractor from "../DateTimeExtractor";
import PlaceView from "../PlaceView";
import { useSelector } from "react-redux";

export default function LeftPanel() {
  const weatherData = useSelector((state) => state.weather);
  return (
    <div className="w-2/6 h-full bg-white flex flex-col items-center p-2 lg:p-4">
      <img
        src={weatherData.data?.current?.condition?.icon}
        className="w-80 object-cover"
      />
      <p className="-mt-4 font-semibold text-xl mb-6">
        {weatherData?.data?.current?.condition?.text}
      </p>
      <div className="w-full px-2 lg:px-16">
        <TemperatureDisplay
          temperature={weatherData.data?.current?.temp_c}
          unit="C"
        />
        <DateTimeExtractor
          dateString={weatherData?.data?.current?.last_updated}
        />
      </div>
      <div className="w-full px-2 lg:px-14 my-6">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <PlaceView
        name={weatherData.data?.location?.name}
        country={weatherData.data?.location?.country}
        region={weatherData.data?.location?.region}
      />
    </div>
  );
}
