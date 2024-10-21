import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import Search from "../assets/search.svg";
import Current from "../assets/current.svg";
import Cancel from "../assets/cancel.svg";

export default function Input({ value = "", onTextChange }) {
  const [input, setInput] = useState(value);
  const onChange = useDebounce(onTextChange, 500);

  const onHandleChange = (event) => {
    const { value } = event.target;
    setInput(value);
    // onChange(value);
  };

  return (
    <div className="relative w-full bg-white p-2 rounded-full">
      <div className="flex items-center bg-gray-100 rounded-full shadow-sm">
        <img className="w-[32px] h-[32px] cursor-pointer hover:bg-gray-200 p-2 rounded-full" src={Search} />
        <input
          type="text"
          value={input}
          onChange={onHandleChange}
          placeholder="Search for places ..."
          className="w-full py-2 text-sm bg-transparent focus:outline-none"
        />
        <img className="w-[32px] h-[32px] cursor-pointer hover:bg-gray-200 p-2 rounded-full" src={Current} />
      </div>
    </div>
  );
}
