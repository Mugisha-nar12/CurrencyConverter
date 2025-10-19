import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faChartArea } from "@fortawesome/free-solid-svg-icons";

function TopGainersLosers() {
  const gainers = [
    { name: "NZD/USD", percentage: "+1.89%" },
    { name: "AUD/JPY", percentage: "+1.45%" },
    { name: "EUR/CHF", percentage: "+1.23%" },
    { name: "GBP/CAD", percentage: "+0.98%" },
  ];

  const losers = [
    { name: "USD/TRY", percentage: "-2.24%" },
    { name: "GBP/JPY", percentage: "-1.67%" },
    { name: "EUR/GBP", percentage: "-1.23%" },
    { name: "USD/ZAR", percentage: "-0.89%" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon
            icon={faChartLine}
            className="text-green-500 text-xl mr-3"
          />
          <h2 className="text-xl font-semibold text-gray-800">Top Gainers</h2>
        </div>
        <ul className="space-y-3">
          {gainers.map((gainer, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-gray-700"
            >
              <span>{gainer.name}</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-medium">
                {gainer.percentage}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon
            icon={faChartArea}
            className="text-red-500 text-xl mr-3"
          />
          <h2 className="text-xl font-semibold text-gray-800">Top Losers</h2>
        </div>
        <ul className="space-y-3">
          {losers.map((loser, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-gray-700"
            >
              <span>{loser.name}</span>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm font-medium">
                {loser.percentage}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopGainersLosers;
