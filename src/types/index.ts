export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: "active" | "inactive";
}

export interface CovidData {
  active: number;
  cases: number;
  deaths: number;
  recovered: number;
}

export interface CountryData extends CovidData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
    flag: string;
  };
}

export interface HistoricalData {
  cases: { [date: string]: number };
  deaths: { [date: string]: number };
  recovered: { [date: string]: number };
}
