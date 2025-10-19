import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

function PreferencesSettings() {
  const [currencyDisplay, setCurrencyDisplay] = useState("symbol"); // 'symbol' or 'code'
  const [chartType, setChartType] = useState("line"); // 'line' or 'bar'
  const [language, setLanguage] = useState("en"); // 'en' or 'es'

  const handleSavePreferences = (e) => {
    e.preventDefault();
    // In a real app, you'd save these to localStorage or a backend
    console.log("Preferences saved:", { currencyDisplay, chartType, language });
    alert("Preferences saved!");
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <FontAwesomeIcon
          icon={faSlidersH}
          className="text-2xl text-gray-600 dark:text-gray-400 mr-3"
        />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Preferences
        </h2>
      </div>

      <form onSubmit={handleSavePreferences}>
        <div className="space-y-6">
          {/* Currency Display */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Currency Display Format
            </label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-teal-600 dark:text-teal-500"
                  name="currencyDisplay"
                  value="symbol"
                  checked={currencyDisplay === "symbol"}
                  onChange={(e) => setCurrencyDisplay(e.target.value)}
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  Symbol (e.g., $)
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-teal-600 dark:text-teal-500"
                  name="currencyDisplay"
                  value="code"
                  checked={currencyDisplay === "code"}
                  onChange={(e) => setCurrencyDisplay(e.target.value)}
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  Code (e.g., USD)
                </span>
              </label>
            </div>
          </div>

          {/* Default Chart Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Default Chart Type
            </label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-teal-600 dark:text-teal-500"
                  name="chartType"
                  value="line"
                  checked={chartType === "line"}
                  onChange={(e) => setChartType(e.target.value)}
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  Line Chart
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-teal-600 dark:text-teal-500"
                  name="chartType"
                  value="bar"
                  checked={chartType === "bar"}
                  onChange={(e) => setChartType(e.target.value)}
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  Bar Chart
                </span>
              </label>
            </div>
          </div>

          {/* Language */}
          <div>
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Language
            </label>
            <select
              id="language"
              name="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                         bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="sw">Swahili</option>
              <option value="ch">Chinesse</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:bg-teal-500 dark:hover:bg-teal-600"
          >
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
}

export default PreferencesSettings;
