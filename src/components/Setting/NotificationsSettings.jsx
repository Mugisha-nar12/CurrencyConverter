import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

function NotificationsSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [newsUpdates, setNewsUpdates] = useState(false);

  const handleSaveNotifications = (e) => {
    e.preventDefault();
    console.log("Notification settings saved:", {
      emailNotifications,
      smsNotifications,
      priceAlerts,
      newsUpdates,
    });
    alert("Notification settings saved!");
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <FontAwesomeIcon
          icon={faBell}
          className="text-2xl text-gray-600 dark:text-gray-400 mr-3"
        />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Notifications
        </h2>
      </div>

      <form onSubmit={handleSaveNotifications}>
        <div className="space-y-6">
          {/* Email Notifications */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="emailNotifications"
              className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 text-gray-500 dark:text-gray-400"
              />
              Email Notifications
            </label>
            <input
              type="checkbox"
              id="emailNotifications"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
              className="form-checkbox h-5 w-5 text-teal-600 dark:text-teal-500 rounded focus:ring-teal-500"
            />
          </div>

          {/* SMS Notifications */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="smsNotifications"
              className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="mr-2 text-gray-500 dark:text-gray-400"
              />
              SMS Notifications
            </label>
            <input
              type="checkbox"
              id="smsNotifications"
              checked={smsNotifications}
              onChange={(e) => setSmsNotifications(e.target.checked)}
              className="form-checkbox h-5 w-5 text-teal-600 dark:text-teal-500 rounded focus:ring-teal-500"
            />
          </div>

          {/* Price Alerts */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="priceAlerts"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Price Alerts
            </label>
            <input
              type="checkbox"
              id="priceAlerts"
              checked={priceAlerts}
              onChange={(e) => setPriceAlerts(e.target.checked)}
              className="form-checkbox h-5 w-5 text-teal-600 dark:text-teal-500 rounded focus:ring-teal-500"
            />
          </div>

          {/* News Updates */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="newsUpdates"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              News Updates
            </label>
            <input
              type="checkbox"
              id="newsUpdates"
              checked={newsUpdates}
              onChange={(e) => setNewsUpdates(e.target.checked)}
              className="form-checkbox h-5 w-5 text-teal-600 dark:text-teal-500 rounded focus:ring-teal-500"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:bg-teal-500 dark:hover:bg-teal-600"
          >
            Save Notifications
          </button>
        </div>
      </form>
    </div>
  );
}

export default NotificationsSettings;
