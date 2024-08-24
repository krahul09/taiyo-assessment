import { useQuery } from "@tanstack/react-query";
import { CovidData, CountryData, HistoricalData } from "../types";

const BASE_URL = "https://disease.sh/v3/covid-19";

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export function useWorldwideData() {
  return useQuery<CovidData, Error>({
    queryKey: ["worldwideData"],
    queryFn: () => fetchData(`${BASE_URL}/all`),
  });
}

export function useCountryData() {
  return useQuery<CountryData[], Error>({
    queryKey: ["countryData"],
    queryFn: () => fetchData(`${BASE_URL}/countries`),
  });
}

export function useHistoricalData() {
  return useQuery<HistoricalData, Error>({
    queryKey: ["historicalData"],
    queryFn: () => fetchData(`${BASE_URL}/historical/all?lastdays=all`),
  });
}
