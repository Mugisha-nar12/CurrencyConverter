import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faChartBar,
  faEuroSign,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

function StatsCards() {
  const stats = [
    {
      title: "Market Cap",
      value: "$7.21T",
      change: "-2.1% today",
      icon: faDollarSign,
      bgColor: "bg-green-100",
      textColor: "text-green-700",
      iconColor: "text-green-500",
    },
    {
      title: "24h Volume",
      value: "$156B",
      change: "+1.3% from yesterday",
      icon: faChartBar,
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      iconColor: "text-blue-500",
    },
    {
      title: "Active Pairs",
      value: "180+",
      change: "Major & Exotic",
      icon: faEuroSign,
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
      iconColor: "text-purple-500",
    },
    {
      title: "Volatility Index",
      value: "12.4",
      change: "Moderate",
      icon: faArrowUp,
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} p-6 rounded-lg shadow-md flex items-center justify-between`}
        >
          <div>
            <p className="text-gray-600 text-sm">{stat.title}</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-1">
              {stat.value}
            </h2>
            <p className={`${stat.textColor} text-sm mt-1`}>{stat.change}</p>
          </div>
          <div className={`${stat.iconColor} text-3xl`}>
            <FontAwesomeIcon icon={stat.icon} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
