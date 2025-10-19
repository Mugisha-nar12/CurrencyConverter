import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faCookieBite,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

function PrivacySettings() {
  const [dataSharing, setDataSharing] = useState(false);
  const [personalizedAds, setPersonalizedAds] = useState(true);
  const [cookieConsent, setCookieConsent] = useState(true);

  const handleSavePrivacy = (e) => {
    e.preventDefault();
    console.log("Privacy settings saved:", {
      dataSharing,
      personalizedAds,
      cookieConsent,
    });
    alert("Privacy settings saved!");
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <FontAwesomeIcon
          icon={faLock}
          className="text-2xl text-gray-600 dark:text-gray-400 mr-3"
        />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Privacy
        </h2>
      </div>

      <form onSubmit={handleSavePrivacy}>
        <div className="space-y-6">
          {/* Data Sharing */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="dataSharing"
              className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <FontAwesomeIcon
                icon={faUserSecret}
                className="mr-2 text-gray-500 dark:text-gray-400"
              />
              Share anonymous usage data
            </label>
            <input
              type="checkbox"
              id="dataSharing"
              checked={dataSharing}
              onChange={(e) => setDataSharing(e.target.checked)}
              className="form-checkbox h-5 w-5 text-teal-600 dark:text-teal-500 rounded focus:ring-teal-500"
            />
          </div>

          {/* Personalized Ads */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="personalizedAds"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Receive personalized advertisements
            </label>
            <input
              type="checkbox"
              id="personalizedAds"
              checked={personalizedAds}
              onChange={(e) => setPersonalizedAds(e.target.checked)}
              className="form-checkbox h-5 w-5 text-teal-600 dark:text-teal-500 rounded focus:ring-teal-500"
            />
          </div>

          {/* Cookie Consent */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="cookieConsent"
              className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <FontAwesomeIcon
                icon={faCookieBite}
                className="mr-2 text-gray-500 dark:text-gray-400"
              />
              Allow essential cookies
            </label>
            <input
              type="checkbox"
              id="cookieConsent"
              checked={cookieConsent}
              onChange={(e) => setCookieConsent(e.target.checked)}
              className="form-checkbox h-5 w-5 text-teal-600 dark:text-teal-500 rounded focus:ring-teal-500"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:bg-teal-500 dark:hover:bg-teal-600"
          >
            Save Privacy Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default PrivacySettings;
