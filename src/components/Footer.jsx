import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faHistory,
  faExchangeAlt,
  faStar,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

function Footer({ symbols }) {
  const staticPopularCurrencies = ["USD", "EUR", "GBP", "JPY"];

  const moreCurrenciesCount = symbols
    ? Object.keys(symbols).length - staticPopularCurrencies.length
    : 0;

  return (
    <footer className="bg-gray-950 text-white py-12 px-8 font-sans">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center text-2xl font-bold text-teal-600">
            <FontAwesomeIcon icon={faExchangeAlt} className="mr-3" />
            CurrencyExchange
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Real-time currency conversion and exchange rate tracking for global
            markets.
          </p>
          <div className="flex items-center text-orange-400 text-base">
            <span className="w-3 h-3 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
            Live Data
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-teal-600 mb-2">Features</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-lg text-gray-200">
              <FontAwesomeIcon
                icon={faChartLine}
                className="mr-3 text-orange-400"
              />
              Live exchange rates
            </li>
            <li className="flex items-center text-lg text-gray-200">
              <FontAwesomeIcon
                icon={faHistory}
                className="mr-3 text-green-400"
              />
              Historical charts
            </li>
            <li className="flex items-center text-lg text-gray-200">
              <FontAwesomeIcon
                icon={faExchangeAlt}
                className="mr-3 text-teal-600"
              />
              Currency converter
            </li>
            <li className="flex items-center text-lg text-gray-200">
              <FontAwesomeIcon icon={faStar} className="mr-3 text-yellow-400" />
              Favorite pairs
            </li>
            <li className="flex items-center text-lg text-gray-200">
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="mr-3 text-purple-400"
              />
              Mobile responsive
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-teal-600 mb-2">
            Currencies
          </h3>
          <p className="text-gray-300 text-lg mb-4">
            Supporting 20+ major world currencies including:
          </p>
          <div className="flex flex-wrap gap-3">
            {staticPopularCurrencies.map((currencyCode) => (
              <span
                key={currencyCode}
                className={`px-4 py-2 rounded-md text-white font-medium text-lg ${
                  currencyCode === "USD"
                    ? "bg-orange-600"
                    : currencyCode === "EUR"
                    ? "bg-green-600"
                    : currencyCode === "GBP"
                    ? "bg-blue-600"
                    : currencyCode === "JPY"
                    ? "bg-yellow-600"
                    : "bg-gray-700"
                }`}
              >
                {currencyCode}
              </span>
            ))}
            {moreCurrenciesCount > 0 && (
              <span className="px-4 py-2 bg-gray-700 rounded-md text-white font-medium text-lg">
                +{moreCurrenciesCount} more
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()}, Currency converter made by Mugisha
        </p>
      </div>
    </footer>
  );
}

export default Footer;
