import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function NewsArticleCard({ article }) {
  const getImpactColor = (impact) => {
    switch (impact) {
      case "high impact":
        return "bg-red-100 text-red-700";
      case "medium impact":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{article.description}</p>
        <div className="flex items-center text-gray-500 text-xs">
          <span className="mr-3">{article.source}</span>
          <span>{article.time}</span>
        </div>
      </div>
      <div className="flex flex-col md:items-end items-start mt-4 md:mt-0 md:ml-6">
        {article.impact && (
          <span
            className={`px-3 py-1 rounded-md text-xs font-medium mb-2 ${getImpactColor(
              article.impact
            )}`}
          >
            {article.impact}
          </span>
        )}
        <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
          {article.currencies.map((currency, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-xs font-medium"
            >
              {currency}
            </span>
          ))}
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm ml-2"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsArticleCard;
