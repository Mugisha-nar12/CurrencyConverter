import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function ProfileSettings() {
  // Initialize state with data from localStorage or default values
  const [lastName, setLastName] = useState(
    localStorage.getItem("profileLastName") || ""
  );
  const [firstName, setFirstName] = useState(
    localStorage.getItem("profileFirstName") || ""
  );
  const [emailAddress, setEmailAddress] = useState(
    localStorage.getItem("profileEmailAddress") || ""
  );
  const [timezone, setTimezone] = useState(
    localStorage.getItem("profileTimezone") || ""
  );

  // Function to handle saving data to localStorage
  const handleSaveChanges = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    localStorage.setItem("profileLastName", lastName);
    localStorage.setItem("profileFirstName", firstName);
    localStorage.setItem("profileEmailAddress", emailAddress);
    localStorage.setItem("profileTimezone", timezone);
    // Simple feedback
    alert("Profile information saved!");
  };

  return (
    <div className="p-6">
      {/* Profile Information Header */}
      <div className="flex items-center mb-6">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-2xl text-gray-600 dark:text-gray-400 mr-3"
        />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Profile Information
        </h2>
      </div>

      <form onSubmit={handleSaveChanges}>
        {" "}
        {/* Add onSubmit handler */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName} // Controlled component and  Update state on change
              onChange={(e) => setLastName(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                         bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>

          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                         bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>

          {/* Email Address */}
          <div className="md:col-span-2">
            <label
              htmlFor="emailAddress"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                         bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>

          {/* Timezone */}
          <div className="md:col-span-2">
            <label
              htmlFor="timezone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Timezone
            </label>
            <select
              id="timezone"
              name="timezone"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                         bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            >
              <option>UTC-12 (Baker Island)</option>
              <option>UTC-11 (Samoa)</option>
              <option>UTC-10 (Hawaii)</option>
              <option>UTC-9 (Alaska)</option>
              <option>UTC-8 (Pacific)</option>
              <option>UTC-7 (Mountain)</option>
              <option>UTC-6 (Central)</option>
              <option>UTC-5 (Eastern)</option>
              <option>UTC-4 (Atlantic)</option>
              <option>UTC-3 (Buenos Aires)</option>
              <option>UTC-2 (South Georgia)</option>
              <option>UTC-1 (Azores)</option>
              <option>UTC+0 (Greenwich)</option>
              <option>UTC+1 (Central European)</option>
              <option>UTC+2 (Eastern European)</option>
              <option>UTC+3 (Moscow)</option>
              <option>UTC+4 (Dubai)</option>
              <option>UTC+5 (Pakistan)</option>
              <option>UTC+6 (Bangladesh)</option>
              <option>UTC+7 (Thailand)</option>
              <option>UTC+8 (Beijing)</option>
              <option>UTC+9 (Tokyo)</option>
              <option>UTC+10 (Sydney)</option>
              <option>UTC+11 (Solomon Islands)</option>
              <option>UTC+12 (Fiji)</option>
            </select>
          </div>
        </div>
        {/* Save Changes Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:bg-teal-500 dark:hover:bg-teal-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSettings;
