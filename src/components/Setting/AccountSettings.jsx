import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCog,
  faTrashAlt,
  faKey,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

function AccountSettings() {
  // State to hold profile data retrieved from localStorage
  const [profileData, setProfileData] = useState({
    lastName: "",
    firstName: "",
    emailAddress: "",
    timezone: "",
  });

  // useEffect to load data from localStorage when the component mounts
  useEffect(() => {
    const storedLastName = localStorage.getItem("profileLastName");
    const storedFirstName = localStorage.getItem("profileFirstName");
    const storedEmailAddress = localStorage.getItem("profileEmailAddress");
    const storedTimezone = localStorage.getItem("profileTimezone");

    setProfileData({
      lastName: storedLastName || "N/A",
      firstName: storedFirstName || "N/A",
      emailAddress: storedEmailAddress || "N/A",
      timezone: storedTimezone || "N/A",
    });
  }, []); // Empty dependency array means this runs once on mount

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      // In a real application, you would send a request to your backend to delete the account.
      // For this example, we'll just clear local storage related to profile.
      localStorage.removeItem("profileLastName");
      localStorage.removeItem("profileFirstName");
      localStorage.removeItem("profileEmailAddress");
      localStorage.removeItem("profileTimezone");
      alert("Account deleted (simulated)! All local profile data cleared.");
      // You might want to redirect the user or log them out here
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <FontAwesomeIcon
          icon={faUserCog}
          className="text-2xl text-gray-600 dark:text-gray-400 mr-3"
        />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Account
        </h2>
      </div>

      <div className="space-y-8">
        {/* Account Information (retrieved from Profile) */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="mr-2 text-teal-500"
            />
            Your Profile Data
          </h3>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md shadow-sm text-gray-700 dark:text-gray-300">
            <p className="mb-2">
              <strong className="font-medium">First Name:</strong>{" "}
              {profileData.firstName}
            </p>
            <p className="mb-2">
              <strong className="font-medium">Last Name:</strong>{" "}
              {profileData.lastName}
            </p>
            <p className="mb-2">
              <strong className="font-medium">Email:</strong>{" "}
              {profileData.emailAddress}
            </p>
            <p>
              <strong className="font-medium">Timezone:</strong>{" "}
              {profileData.timezone}
            </p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            This data is saved from your Profile tab.
          </p>
        </div>

        {/* Change Password */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <FontAwesomeIcon icon={faKey} className="mr-2 text-teal-500" />
            Security
          </h3>
          <button
            onClick={() => alert("Navigate to change password page/modal")}
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Change Password
          </button>
        </div>

        {/* Delete Account */}
        <div>
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center">
            <FontAwesomeIcon icon={faTrashAlt} className="mr-2 text-red-500" />
            Danger Zone
          </h3>
          <button
            onClick={handleDeleteAccount}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete Account
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
