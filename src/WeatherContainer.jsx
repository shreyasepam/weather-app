import React, { useEffect } from "react";
import LeftPanel from "./components/panels/LeftPanel";
import RightPanel from "./components/panels/RightPanel";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./redux/slice/weatherSlice";

export default function WeatherContainer() {
  const weatherData = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeather(`${latitude},${longitude}`));
        },
        (error) => {
          console.log("Error getting location", error);
        }
      );
    }
  }, [dispatch]);

  console.log("myWarether", weatherData);

  return (
    <div className="max-w-7xl w-full h-full p-8">
      <div className="w-full bg-gray-100  rounded-3xl flex overflow-hidden shadow-xl relative">
        <LeftPanel />
        <RightPanel />
        {weatherData?.loading || weatherData.error ? (
          <div class="w-full h-full absolute bg-white bg-opacity-75 p-6 flex items-center justify-center">
            {weatherData?.error ? (
              <p className="text-red-500 text-md bg-white p-4">Error: {weatherData?.error}. Refresh the browser.</p>
            ) : (
              <p className="text-black text-lg">Loading...</p>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
