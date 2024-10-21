import React from "react";
import DayView from "../DayView";
import Input from "../Input";
import HighlightCard from "../HighlightCard";
import { useSelector } from "react-redux";

export default function RightPanel() {
  const weatherData = useSelector((state) => state.weather);
  return (
    <div className="w-4/6 h-full bg-gray-100 p-4">
      <Input />
      <div className="w-full flex justify-center gap-4 mt-6">
        {weatherData?.data?.forecast?.forecastday?.map((x) => (
          <DayView
            dateString={x?.date}
            fromTemp={x?.day?.mintemp_c}
            toTemp={x?.day?.maxtemp_c}
            image={x?.day?.condition?.icon}
          />
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold my-6">Highlights</h2>
        <div className="grid grid-cols-3 gap-4">
          <HighlightCard
            name={"UV Index"}
            value={`${weatherData?.data?.current?.uv || 0}`}
          />
          <HighlightCard
            name={"Wind"}
            value={`${weatherData?.data?.current?.wind_mph || 0}mph`}
          />
          <HighlightCard
            name={"Humidity"}
            value={`${weatherData?.data?.current?.humidity || 0}`}
          />
          <HighlightCard
            name={"Dew point"}
            value={`${weatherData?.data?.current?.dewpoint_c || 0}°c`}
          />
          <HighlightCard
            name={"Gust"}
            value={`${weatherData?.data?.current?.gust_mph || 0}mph`}
          />
          <HighlightCard
            name={"Heat index"}
            value={`${weatherData?.data?.current?.heatindex_c || 0}°c`}
          />
        </div>
      </div>
    </div>
  );
}
