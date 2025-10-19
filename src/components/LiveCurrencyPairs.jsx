import React, { useState, useEffect, useCallback, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const pairCategories = {
  major: [
    { from: "USD", to: "EUR" },
    { from: "GBP", to: "USD" },
    { from: "USD", to: "JPY" },
    { from: "AUD", to: "USD" },
    { from: "CHF", to: "EUR" },
  ],
  exotic: [
    { from: "USD", to: "ZAR" },
    { from: "EUR", to: "TRY" },
    { from: "USD", to: "BRL" },
    { from: "GBP", to: "INR" },
    { from: "AUD", to: "CNY" },
  ],
  african: [
    { from: "USD", to: "NGN" },
    { from: "USD", to: "GHS" },
    { from: "GBP", to: "ZAR" },
    { from: "USD", to: "EGP" },
  ],
  eastAfrican: [
    { from: "USD", to: "KES" },
    { from: "USD", to: "UGX" },
    { from: "USD", to: "TZS" },
    { from: "USD", to: "RWF" },
    { from: "USD", to: "BIF" },
  ],
};

const API_URL = "https://api.exchangerate-api.com/v4/latest/";

const ratesReducer = (state, action) => {
  switch (action.type) {
    case "SET_RATES":
      // On the first fetch, initialize both rates and historicalRates
      if (Object.keys(state.rates).length === 0) {
        return {
          rates: action.payload,
          historicalRates: action.payload,
        };
      }
      // On subsequent fetches, update if the rates have changed
      if (JSON.stringify(state.rates) !== JSON.stringify(action.payload)) {
        return {
          rates: action.payload,
          historicalRates: state.rates, // old rates become historical
        };
      }
      // If rates haven't changed, return the current state
      return state;
    default:
      return state;
  }
};

function LiveCurrencyPairs() {
  const [ratesState, dispatch] = useReducer(ratesReducer, {
    rates: {},
    historicalRates: {},
  });
  const { rates, historicalRates } = ratesState;
  const [activeCategory, setActiveCategory] = useState("major");

  const fetchRates = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}USD`);
      if (!response.ok) throw new Error("Failed to fetch rates");
      const data = await response.json();
      dispatch({ type: "SET_RATES", payload: data.rates });
    } catch (error) {
      console.error("Error fetching rates:", error);
    }
  }, []);

  useEffect(() => {
    fetchRates();
    // Refresh every 30 seconds
    const interval = setInterval(fetchRates, 30000);
    return () => clearInterval(interval);
  }, [fetchRates]);

  const getRateAndChange = useCallback(
    (from, to) => {
      if (!rates[from] || !rates[to]) {
        return {
          price: "N/A",
          change: "N/A",
          percentage: "N/A",
          isPositive: true,
        };
      }

      const currentRate = rates[to] / rates[from];
      const previousRate = historicalRates[to] / historicalRates[from];

      const change = currentRate - previousRate;
      const percentageChange = previousRate ? (change / previousRate) * 100 : 0;

      return {
        price: currentRate.toFixed(4),
        change: change.toFixed(4),
        percentage: `${percentageChange.toFixed(2)}%`,
        isPositive: change >= 0,
      };
    },
    [rates, historicalRates]
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Live Currency Pairs
        </h2>
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 text-sm"
        >
          <option value="major">Major Pairs</option>
          <option value="exotic">Exotic Pairs</option>
          <option value="african">African Pairs</option>
          <option value="eastAfrican">East African Pairs</option>
        </select>
      </div>

      <div className="space-y-4">
        {pairCategories[activeCategory].map((pair, index) => {
          const { price, change, percentage, isPositive } = getRateAndChange(
            pair.from,
            pair.to
          );
          const pairName = `${pair.from}/${pair.to}`;
          const volume = `Volume: ${(Math.random() * 5 + 1).toFixed(1)}B`;

          return (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold mr-3">
                  {pair.from}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{pairName}</p>
                  <p className="text-sm text-gray-500">{volume}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">{price}</p>
                <div
                  className={`flex items-center text-sm ${
                    isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={isPositive ? faCaretUp : faCaretDown}
                    className="mr-1"
                  />
                  {change} ({percentage})
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LiveCurrencyPairs;
