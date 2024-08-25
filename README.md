# Contact Management App with Maps and Charts

This project is a React-based contact management application that also includes COVID-19 data visualization using maps and charts. It demonstrates the use of modern web development technologies and practices.

## Features

- Contact Management:
  - Add new contacts with first name, last name, and status
  - View a list of all contacts
  - Edit existing contacts
  - Delete contacts
- COVID-19 Data Visualization:
  - Line graph showing case fluctuations over time
  - Interactive map with country-wise COVID-19 statistics

## Technologies Used

- React
- TypeScript
- Redux Toolkit for state management
- React Router for navigation
- React Query for data fetching
- Tailwind CSS for styling
- Chart.js for data visualization
- React Leaflet for map integration

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository: git clone https://github.com/your-username/contact-management-app.git
2. Navigate to the project directory: cd contact-management-app
3. Install dependencies: npm install

### Running the App

1. Start the development server: npm start
2. Open your browser and visit `http://localhost:3000`

## Project Structure
src/
├── components/
│   ├── ContactForm.tsx
│   ├── ContactList.tsx
│   ├── ContactDetails.tsx
│   ├── LineGraph.tsx
│   └── Map.tsx
├── pages/
│   ├── Contacts.tsx
│   └── ChartsAndMaps.tsx
├── store/
│   ├── contactSlice.ts
│   └── store.ts
├── hooks/
│   ├── useApi.ts
│   └── useInitializeStore.ts
├── types/
│   └── index.ts
├── App.tsx
└── index.tsx


## Usage

- The app opens on the Contacts page by default.
- Use the sidebar navigation to switch between Contacts and Charts and Maps pages.
- On the Contacts page:
  - Click "Create Contact" to add a new contact.
  - View, edit, or delete existing contacts.
- On the Charts and Maps page:
  - View the line graph showing COVID-19 case trends.
  - Interact with the map to see country-specific COVID-19 data.

## Data Persistence

Contact data is stored in the browser's localStorage, ensuring that your contacts persist between sessions.


## API Endpoints

The app uses the following API endpoints for COVID-19 data:

- Worldwide data: `https://disease.sh/v3/covid-19/all`
- Country-specific data: `https://disease.sh/v3/covid-19/countries`
- Historical data for charts: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`

Breif about the API endpoints

1. Worldwide data: https://disease.sh/v3/covid-19/all

This endpoint provides global COVID-19 statistics.
It returns a single JSON object with worldwide totals.
Key data points include:

Total cases
Total deaths
Total recovered
Active cases
Critical cases
Tests conducted
Population


This data is useful for displaying overall global statistics.


2. Country-specific data: https://disease.sh/v3/covid-19/countries

This endpoint returns COVID-19 statistics for all countries.
It provides an array of objects, each representing a country.
For each country, you get:

Country name
ISO2 and ISO3 country codes
Latitude and longitude (useful for map plotting)
Flag image URL
Cases, deaths, recovered, active cases
Tests conducted
Population


This data is ideal for creating the interactive map with country-specific information.


3. Historical data for charts: https://disease.sh/v3/covid-19/historical/all?lastdays=all

This endpoint provides historical data of COVID-19 cases worldwide.
It returns a JSON object with three main properties: cases, deaths, and recovered.
Each property contains date-wise data from the start of the pandemic.
The data format is: { "date": number_of_cases }
For example: { "1/22/20": 557, "1/23/20": 657, ... }
This historical data is perfect for creating time-series charts, like the line graph showing case fluctuations over time.


These API endpoints are provided by the disease.sh service, which aggregates COVID-19 data.


