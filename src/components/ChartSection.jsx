import React from "react";
import eurSekChart from "../assets/image/eur-sek-static-chart-us.png";

function ChartSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Market Trend - USD/EUR
        </h2>
        <div className="flex space-x-2">
          {["1D", "1W", "1M", "6M", "1Y"].map((period) => (
            <button
              key={period}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                period === "1D"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full h-auto">
        <img
          src={eurSekChart}
          alt="EURSEK Chart"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default ChartSection;
