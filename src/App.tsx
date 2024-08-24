import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contacts from "./pages/Contacts";
import ChartsAndMaps from "./pages/ChartsAndMaps";

const queryClient = new QueryClient();

function Header() {
  const location = useLocation();

  // Determine the header text based on the current path
  let headerText;
  if (location.pathname === "/charts-and-maps") {
    headerText = "Charts and Maps";
  } else {
    headerText = "Contact Page";
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold">{headerText}</h1>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-100 flex">
          {/* Sidebar */}
          <aside className="w-32 bg-white shadow-md">
            <div className="py-64">
              <nav className="flex flex-col space-y-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border-indigo-500 text-gray-900 inline-flex items-center px-4 py-2 border-l-4 text-sm font-medium"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-4 py-2 border-l-4 text-sm font-medium"
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/charts-and-maps"
                  className={({ isActive }) =>
                    isActive
                      ? "border-indigo-500 text-gray-900 inline-flex items-center px-4 py-2 border-l-4 text-sm font-medium"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-4 py-2 border-l-4 text-sm font-medium"
                  }
                >
                  Charts and Maps
                </NavLink>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Dynamic Header */}
            <Header />

            {/* Page Content */}
            <div className="py-10">
              <main>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <Routes>
                    <Route path="/" element={<Contacts />} />
                    <Route
                      path="/charts-and-maps"
                      element={<ChartsAndMaps />}
                    />
                  </Routes>
                </div>
              </main>
            </div>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
