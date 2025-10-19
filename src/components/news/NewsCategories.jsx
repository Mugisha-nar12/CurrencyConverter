import React, { useState } from "react";

function NewsCategories() {
  const categories = [
    "All",
    "Central Banks",
    "Politics",
    "Markets",
    "Commodities",
    "Crypto",
    "Emerging",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
            ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default NewsCategories;
