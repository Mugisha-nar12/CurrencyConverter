import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import CurrencyConverter from "./components/CurrencyConverter";
import LiveCurrencyPairs from "./components/LiveCurrencyPairs";
import Footer from "./components/Footer";
import { fetchLatestRates, fetchCurrencySymbols } from "./api/currencyService";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  const [latestRates, setLatestRates] = useState(null);
  const [currencySymbols, setCurrencySymbols] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrencyData = async () => {
      setLoading(true);
      setError(null);
      try {
        const rates = await fetchLatestRates();
        const symbols = await fetchCurrencySymbols();
        setLatestRates(rates);
        setCurrencySymbols(symbols);
      } catch (err) {
        setError("Failed to fetch currency data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getCurrencyData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Navbar />
      <main>
        <Outlet context={{ latestRates, currencySymbols }} />
      </main>
      <Footer symbols={currencySymbols} />
    </div>
  );
}

export default App;
