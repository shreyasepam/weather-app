import React, { useState, useEffect, useRef } from "react";
import { useDebounce } from "../hooks/useDebounce";
import Search from "../assets/search.svg";
import Current from "../assets/current.svg";
import { useDispatch, useSelector } from "react-redux";
import { weatherSearch } from "../redux/slice/weatherSearchSlice";
import { fetchWeather } from "../redux/slice/weatherSlice";

export default function WeatherSearchInput() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const weatherSearchData = useSelector((state) => state.weatherSearch);
  const searchInputRef = useRef(null);

  const onFetchData = (query) => {
    dispatch(weatherSearch(query));
    setShowDropdown(true);
  };

  const onChange = useDebounce(onFetchData, 500);

  const onSelect = (value, latitude, longitude) => {
    setInput(value);
    setShowDropdown(false);
    dispatch(fetchWeather(`${latitude},${longitude}`));
  };

  const onHandleChange = (event) => {
    const { value } = event.target;
    setInput(value);
    if (value) {
      onChange(value);
    }
  };

  const onClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickOutside, true);
    return () => {
      document.removeEventListener("click", onClickOutside, true);
    };
  }, []);

  console.log("wertyuio", weatherSearchData);

  return (
    <div
      className="relative w-full bg-white p-2 rounded-full"
      ref={searchInputRef}
    >
      <div className="flex items-center bg-gray-100 rounded-full shadow-sm">
        <img
          className="w-[32px] h-[32px] cursor-pointer hover:bg-gray-200 p-2 rounded-full"
          src={Search}
        />
        <input
          type="text"
          value={input}
          onChange={onHandleChange}
          placeholder="Search for places ..."
          className="w-full py-2 text-sm bg-transparent border-none focus:outline-none focus:ring-0"
        />
        <img
          className="w-[32px] h-[32px] cursor-pointer hover:bg-gray-200 p-2 rounded-full"
          src={Current}
        />
      </div>

      {showDropdown && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg">
          {weatherSearchData.loading ? (
            <div className="p-4">Loading...</div>
          ) : weatherSearchData.error ? (
            <div className="p-4 text-red-500">{weatherSearchData.error}</div>
          ) : weatherSearchData.data ? (
            <ul className="max-h-[200px] overflow-y-auto">
              {weatherSearchData.data.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                  onClick={() => onSelect(item.name, item.lat, item.lon)}
                >
                  {item.name}, {item.region}, {item.country}
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}
