import React, { useState } from "react";
import ProfileSettings from "../components/Setting/ProfileSettings";
import PreferencesSettings from "../components/Setting/PreferencesSettings";
import NotificationsSettings from "../components/Setting/NotificationsSettings";
import PrivacySettings from "../components/Setting/PrivacySettings";
import AccountSettings from "../components/Setting/AccountSettings";

// Import all tab content components

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", name: "Profile" },
    { id: "preferences", name: "Preferences" },
    { id: "notifications", name: "Notifications" },
    { id: "privacy", name: "Privacy" },
    { id: "account", name: "Account" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />;
      case "preferences":
        return <PreferencesSettings />;
      case "notifications":
        return <NotificationsSettings />;
      case "privacy":
        return <PrivacySettings />;
      case "account":
        return <AccountSettings />; // Render the AccountSettings component
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your currency exchange experience
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-8 overflow-hidden">
          <div className="flex flex-wrap justify-between border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-1 text-center py-4 px-2 text-sm font-medium
                  ${
                    activeTab === tab.id
                      ? "bg-teal-500 text-white dark:bg-teal-600"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }
                  transition-colors duration-200 ease-in-out
                  whitespace-nowrap
                `}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default Settings;
