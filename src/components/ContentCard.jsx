import React from "react";
import CurrencyConverter from "./CurrencyConverter";
import LiveCurrencyPairs from "./LiveCurrencyPairs";

const ContentCard = ({ latestRates, currencySymbols, onAddFavorite }) => {
  return (
    <section className="py-12 px-4 bg-gray-200 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg bg-orange-400 text-white h-28 sm:h-30 lg:h-40  transition-transform duration-300 hover:scale-105">
          <h2 className="text-5xl md:text-6xl font-bold mb-2">20+</h2>
          <p className="text-lg md:text-xl font-medium text-orange-200">
            Currencies Supported
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg bg-teal-400 text-white h-28 sm:h-30 lg:h-40  transition-transform duration-300 hover:scale-105">
          <h2 className="text-5xl md:text-6xl font-bold mb-2">24/7</h2>
          <p className="text-lg md:text-xl font-medium text-teal-200">
            Live Updates
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg bg-blue-400 text-white h-28 sm:h-30 lg:h-40 transition-transform duration-300 hover:scale-105">
          <h2 className="text-5xl md:text-6xl font-bold mb-2">99.9%</h2>
          <p className="text-lg md:text-xl font-medium text-blue-300">Uptime</p>
        </div>

        <div className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg bg-amber-400 text-white h-28 sm:h-30 lg:h-40 transition-transform duration-300 hover:scale-105">
          <h2 className="text-5xl md:text-6xl font-bold mb-2">1M+</h2>
          <p className="text-lg md:text-xl font-medium text-amber-200">
            Conversions Daily
          </p>
        </div>
      </div>
      <CurrencyConverter
        rates={latestRates}
        symbols={currencySymbols}
        onAddFavorite={onAddFavorite}
      />
      <LiveCurrencyPairs rates={latestRates} />
    </section>
  );
};

export default ContentCard;
