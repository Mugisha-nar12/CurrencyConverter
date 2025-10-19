import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="relative flex flex-col items-center justify-center text-center py-10 px-4 bg-[#abf0f0]">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6 z-10">
        Currency Exchange
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 z-10">
        Get real-time exchange rates, convert currencies instantly, and track
        market trends with our comprehensive currency tools.
      </p>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-10">
        <Link
          to="/market"
          className="relative flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300 z-50"
        >
          Explore Markets
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-lg" />
        </Link>
        <Link
          to="/News"
          className="relative px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-colors duration-300 z-50"
        >
          Latest News
        </Link>
      </div>
    </header>
  );
}

export default Header;
