import React, { useState, useEffect, useCallback } from "react";

const currencies = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$" },
  { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$" },
  { code: "ZAR", name: "South African Rand", symbol: "R" },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦" },
  { code: "KES", name: "Kenyan Shilling", symbol: "KSh" },
  { code: "GHS", name: "Ghanaian Cedi", symbol: "GH₵" },
  { code: "EGP", name: "Egyptian Pound", symbol: "E£" },
  { code: "XOF", name: "CFA Franc BCEAO", symbol: "FCFA" },
  { code: "XAF", name: "CFA Franc BEAC", symbol: "FCFA" },
  { code: "UGX", name: "Ugandan Shilling", symbol: "USh" },
  { code: "TZS", name: "Tanzanian Shilling", symbol: "TSh" },
];

const API_URL = "https://api.exchangerate-api.com/v4/latest/";

function FavoritePairs({ newFavorite }) {
  const [favoritePairs, setFavoritePairs] = useState([
    { id: 1, from: "USD", to: "EUR", rate: 0 },
    { id: 2, from: "GBP", to: "USD", rate: 0 },
  ]);
  const [ratesCache, setRatesCache] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (newFavorite) {
      setFavoritePairs((prevPairs) => [
        ...prevPairs,
        { ...newFavorite, id: Date.now() },
      ]);
    }
  }, [newFavorite]);

  const getCurrencyByCode = useCallback(
    (code) => currencies.find((c) => c.code === code),
    []
  );

  const fetchRates = useCallback(async (baseCurrency) => {
    try {
      const response = await fetch(`${API_URL}${baseCurrency}`);
      if (!response.ok) {
        throw new Error("Failed to fetch rates");
      }
      const data = await response.json();
      setRatesCache((prevCache) => ({
        ...prevCache,
        [baseCurrency]: data.rates,
      }));
      return data.rates;
    } catch (error) {
      console.error("Error fetching rates:", error);
      return null;
    }
  }, []);

  const updateRates = useCallback(async () => {
    setIsRefreshing(true);
    const allRates = { ...ratesCache };

    for (const pair of favoritePairs) {
      if (!allRates[pair.from]) {
        const rates = await fetchRates(pair.from);
        if (rates) {
          allRates[pair.from] = rates;
        }
      }
    }

    const updatedPairs = favoritePairs.map((pair) => {
      const rate = allRates[pair.from] ? allRates[pair.from][pair.to] : 0;
      return { ...pair, rate: rate || 0 };
    });

    if (JSON.stringify(favoritePairs) !== JSON.stringify(updatedPairs)) {
      setFavoritePairs(updatedPairs);
    }

    setIsLoading(false);
    setIsRefreshing(false);
  }, [favoritePairs, fetchRates, ratesCache]);

  useEffect(() => {
    updateRates();
    const interval = setInterval(updateRates, 60 * 1000);
    return () => clearInterval(interval);
  }, [updateRates]);

  const handleRemovePair = (id) => {
    setFavoritePairs((prevPairs) => prevPairs.filter((pair) => pair.id !== id));
  };

  const handleRefreshAll = () => {
    console.log("Rates refreshed!");
    updateRates();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center">
          <p className="text-gray-800">Loading favorite pairs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Favorite Currency Pairs
          </h3>
          <button
            onClick={handleRefreshAll}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label="Refresh rates"
            disabled={isRefreshing}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${isRefreshing ? "animate-spin" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-3 mb-6">
          {favoritePairs.map((pair) => {
            const toCurrencyObj = getCurrencyByCode(pair.to);
            return (
              <div
                key={pair.id}
                className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {pair.from}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {pair.to}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-200 text-sm font-semibold rounded-md">
                    {toCurrencyObj?.symbol}
                    {pair.rate.toFixed(4)}
                  </span>
                  <button
                    onClick={() => handleRemovePair(pair.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600"
                    aria-label={`Remove ${pair.from} to ${pair.to} pair`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-gray-500 text-center dark:text-gray-400">
          Rates update automatically every minute
        </p>
      </div>
    </div>
  );
}

export default FavoritePairs;
