import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaBell, FaHistory, FaExchangeAlt } from "react-icons/fa"; // Example icons

function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold text-center text-teal-600 dark:text-teal-400 mb-8">
          About Currency Exchange
        </h1>

        {/* Introduction/Overview */}
        <p className="text-lg text-center mb-12 leading-relaxed">
          Welcome to{" "}
          <strong className="font-semibold text-teal-700 dark:text-teal-300">
            Currency Exchange
          </strong>
          , your comprehensive and real-time platform for navigating the dynamic
          world of global currencies and financial markets. Designed for
          investors, travelers, and anyone needing up-to-the-minute financial
          insights, our application empowers you with the data you need to make
          informed decisions.
        </p>

        {/* What We Offer / Key Features */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-10">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Feature Item 1: Real-time Currency Updates */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaExchangeAlt className="text-3xl text-teal-500 mr-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Real-time Currency Updates
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Stay ahead with live exchange rates for a vast array of global
              currencies. Our data is continuously updated, ensuring you always
              have the most current information at your fingertips for
              conversions, trading, or travel planning.
            </p>
          </div>

          {/* Feature Item 2: Comprehensive Market Insights */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-3xl text-teal-500 mr-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Comprehensive Market Insights
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Gain a clear perspective on the stock exchange market. We provide
              key indicators, trends, and performance data to help you
              understand how global events impact financial assets.
            </p>
          </div>

          {/* Feature Item 3: Personalized Alerts */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaBell className="text-3xl text-teal-500 mr-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Personalized Alerts
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Never miss a critical market movement. Set custom alerts for
              specific currency pairs or stock performance, and receive
              notifications directly, so you can react promptly to opportunities
              or changes.
            </p>
          </div>

          {/* Feature Item 4: Historical Data & Trends */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaHistory className="text-3xl text-teal-500 mr-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Historical Data & Trends
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Analyze past performance with our extensive historical data.
              Visualize trends and patterns to better predict future movements
              and refine your financial strategies.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-10">
          Our Mission
        </h2>
        <p className="text-lg text-center mb-12 leading-relaxed">
          Our mission at Currency Exchange is to democratize financial
          information, making complex market data accessible and understandable
          for everyone. We believe that informed decisions lead to better
          financial outcomes, and we are committed to providing the tools and
          insights to achieve that.
        </p>

        {/* Call to Action */}
        <p className="text-center text-lg mt-12">
          Ready to explore the markets?{" "}
          <Link
            to="/market"
            className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
          >
            Head over to our Market page
          </Link>{" "}
          or{" "}
          <Link
            to="/"
            className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
          >
            start converting currencies
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
