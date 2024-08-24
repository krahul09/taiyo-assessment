import React from "react";
import LineGraph from "../components/LineGraph";
import Map from "../components/Map";

const ChartsAndMaps: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Charts and Maps</h1>
      <LineGraph />
      <Map />
    </div>
  );
};

export default ChartsAndMaps;
