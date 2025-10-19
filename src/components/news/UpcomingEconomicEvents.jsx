import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

function UpcomingEconomicEvents() {
  const events = [
    {
      time: "09:30 GMT",
      title: "US Consumer Price Index (CPI)",
      forecast: "Forecast: 3.2% | Previous: 3.1%",
      currency: "USD",
      impact: "high",
    },
    {
      time: "10:00 GMT",
      title: "ECB Interest Rate Decision",
      forecast: "Forecast: 4.25% | Previous: 4.25%",
      currency: "EUR",
      impact: "high",
    },
    {
      time: "Tomorrow 12:30 GMT",
      title: "UK Employment Data",
      forecast: "Forecast: 4.0% | Previous: 3.9%",
      currency: "GBP",
      impact: "medium",
    },
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <div className="flex items-center mb-4">
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="text-blue-500 mr-3 text-xl"
        />
        <h2 className="text-xl font-semibold text-gray-800">
          Upcoming Economic Events
        </h2>
      </div>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
          >
            <div>
              <p className="text-gray-700 font-medium">{event.time}</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {event.title}
              </h3>
              <p className="text-gray-500 text-sm">{event.forecast}</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-xs font-medium">
                {event.currency}
              </span>
              <span
                className={`px-3 py-1 rounded-md text-xs font-medium ${getImpactColor(
                  event.impact
                )}`}
              >
                {event.impact}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEconomicEvents;
