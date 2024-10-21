import React from "react";

export default function HighlightCard({ name, value, footerValue }) {
  return (
    <div className="h-36 rounded-xl bg-white shadow-md flex flex-col justify-between p-4">
      <p className="text-gray-400">{name}</p>
      <p className="text-4xl font-semibold text-center">{value}</p>
      {footerValue && <p>{footerValue}</p>}
    </div>
  );
}
