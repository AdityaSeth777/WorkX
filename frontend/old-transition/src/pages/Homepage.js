// src/pages/Homepage.js

import React, { useState } from 'react';
import './Homepage.css';

function Homepage() {
  const [weather, setWeather] = useState(null);
  const [currency, setCurrency] = useState(0);

  const refreshData = () => {
    // Example API calls (you need to replace with actual APIs)
    fetchWeather();
    fetchCurrency();
  };

  const fetchWeather = async () => {
    // Fetch weather data from a reliable API
    // Example: const response = await fetch('API_URL');
    setWeather("Sample weather data");
  };

  const fetchCurrency = async () => {
    // Fetch currency conversion data from a reliable API
    // Example: const response = await fetch('API_URL');
    setCurrency(74.35); // Replace with actual conversion rate
  };

  return (
    <div className="homepage">
      <h1>Welcome to WorkX</h1>
      <div className="live-info">
        <h2>Live Weather</h2>
        <p>{weather || "No weather data available."}</p>
        <h2>Currency Conversion</h2>
        <p>1 USD = {currency} INR</p>
        <button onClick={refreshData} className="refresh-button">Refresh Data</button>
      </div>
    </div>
  );
}

export default Homepage;
