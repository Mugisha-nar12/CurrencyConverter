import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faChartLine,
  faStar,
  faGlobe,
  faShieldAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: <FontAwesomeIcon icon={faBolt} className="text-orange-400" />,
    title: "Real-Time Rates",
    description:
      "Get live exchange rates updated every minute from global financial markets and major banks.",
  },
  {
    icon: <FontAwesomeIcon icon={faChartLine} className="text-teal-400" />,
    title: "Advanced Analytics",
    description:
      "Analyze currency trends with interactive charts, historical data, and technical indicators.",
  },
  {
    icon: <FontAwesomeIcon icon={faStar} className="text-blue-400" />,
    title: "Smart Favorites",
    description:
      "Save your most used currency pairs for quick access and get personalized insights.",
  },
  {
    icon: <FontAwesomeIcon icon={faGlobe} className="text-yellow-500" />,
    title: "Global Coverage",
    description:
      "Access rates for major world currencies including exotic pairs and emerging markets.",
  },
  {
    icon: <FontAwesomeIcon icon={faShieldAlt} className="text-yellow-400" />,
    title: "Bank-Grade Security",
    description:
      "Enterprise-level security with encrypted connections and secure data handling.",
  },
  {
    icon: <FontAwesomeIcon icon={faClock} className="text-gray-500" />,
    title: "24/7 Availability",
    description:
      "Round-the-clock access to currency data with 99.9% uptime guarantee.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-gray-900 dark:bg-black py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Built for professionals and everyday users who need reliable,
            accurate currency data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-start text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4 p-3 rounded-lg bg-gray-700 dark:bg-gray-900">
                <span className="text-3xl"> {feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
