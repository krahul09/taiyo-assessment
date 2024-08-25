import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useCountryData } from "../hooks/useApi";
import "leaflet/dist/leaflet.css";

const Map: React.FC = () => {
  const { data, isLoading, error } = useCountryData();

  console.log(data?.[0]?.countryInfo);
  console.log(data?.[0]?.active);
  console.log(data?.[0]?.cases);
  console.log(data?.[0]?.countryInfo?.flag);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="h-96">
      <MapContainer
        center={[0, 0]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.map((country) => {
          const flagIcon = L.icon({
            iconUrl: country.countryInfo.flag,
            iconSize: [25, 15],
            iconAnchor: [12, 15],
            popupAnchor: [0, -15],
          });

          return (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
              icon={flagIcon}
            >
              <Popup>
                <div className="p-4 bg-[#FFFDD0] rounded-lg shadow-md text-center">
                  <img
                    src={country.countryInfo.flag}
                    alt={`${country.country} flag`}
                    className="w-16 h-auto mb-4 mx-auto border border-gray-300 rounded"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {country.country}
                  </h3>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-blue-500">
                      Active Cases:
                    </span>{" "}
                    {country.active.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-green-500">
                      Recovered:
                    </span>{" "}
                    {country.recovered.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-red-500">Deaths:</span>{" "}
                    {country.deaths.toLocaleString()}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
export default Map;
