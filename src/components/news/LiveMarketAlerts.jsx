import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function LiveMarketAlerts() {
  const alerts = [
    {
      type: "BREAKING",
      message: "USD/EUR breaks key resistance level",
      time: "15 min ago",
      bgColor: "bg-red-100",
      textColor: "text-red-700",
    },
    {
      type: "WARNING",
      message: "High volatility expected in GBP pairs",
      time: "1 hour ago",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
    },
    {
      type: "INFO",
      message: "Asian session opens with mixed sentiment",
      time: "3 hours ago",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center mb-4">
        <FontAwesomeIcon
          icon={faBell}
          className="text-orange-500 mr-3 text-xl"
        />
        <h2 className="text-xl font-semibold text-gray-800">
          Live Market Alerts
        </h2>
      </div>
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`${alert.bgColor} p-3 rounded-md flex justify-between items-center`}
          >
            <p className={`${alert.textColor} text-sm font-medium`}>
              <span className="font-bold mr-2">{alert.type}</span>{" "}
              {alert.message}
            </p>
            <span className="text-gray-500 text-xs">{alert.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveMarketAlerts;
