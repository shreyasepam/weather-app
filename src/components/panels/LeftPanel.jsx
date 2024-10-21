import React from "react";
import data from "../../data/current.json";
import TemperatureDisplay from "../TemperatureDisplay";
import DateTimeExtractor from "../DateTimeExtractor";
import PlaceView from "../PlaceView";

export default function LeftPanel() {
  return (
    <div className="w-2/6 h-full bg-white flex flex-col items-center">
      <img src={data?.current?.condition?.icon} className="w-full object-cover" />
      <div className="w-full px-16">
        <TemperatureDisplay temperature={data?.current?.temp_c} unit="C" />
        <DateTimeExtractor dateString={data?.current?.last_updated} />
      </div>
      <div className="w-full px-14 my-6">
      <div className="w-full border-t border-gray-300"></div>
      </div>
      <PlaceView name={data?.location?.name} country={data?.location?.country} region={data?.location?.region} />
    </div>
  );
}
