import React from "react";

const GridItem = ({ name, value }) => (
  <>
    <div className="col-span-3">{name}</div>
    <div className="col-span-1">:</div>
    <div className="col-span-8">{value}</div>
  </>
);

export default function PlaceView({ name, region, country }) {
  return (
    <div className="w-full p-4">
      <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full">
        <h2 className="text-xl font-semibold mb-4">Region info</h2>
        <div className="grid grid-cols-12 gap-1">
          <GridItem name={"Name"} value={name} />
          <GridItem name={"Region"} value={region} />
          <GridItem name={"Country"} value={country} />
        </div>
      </div>
    </div>
  );
}
