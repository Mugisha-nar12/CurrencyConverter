import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FaArrowTrendUp } from "react-icons/fa6";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Market", href: "/market" },
    { name: "News", href: "/News" },
    { name: "Alerts", href: "#" },
    { name: "Settings", href: "/settings" },
    { name: "About", href: "/About" },
  ];

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaArrowTrendUp className="text-2xl text-teal-600 dark:text-teal-400" />
              <span className="text-2xl font-bold text-teal-700 dark:text-teal-300">
                Currency
                <span className="text-teal-600 dark:text-teal-400">
                  Exchange
                </span>
              </span>
            </Link>
          </div>
          {/*link */}
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6 m-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`
                    text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400
                    px-3 py-2 text-base font-medium relative group
                  `}
                >
                  {link.name}
                  <span
                    className={`
                      absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 dark:bg-teal-400
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                    `}
                  ></span>
                </Link>
              ))}
            </div>
          </div>
          {/* Right section: Mobile Menu Toggle + Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button (visible on mobile, hidden on desktop) */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="text-xl" />
              )}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FontAwesomeIcon icon={faSun} className="text-xl" />
              ) : (
                <FontAwesomeIcon icon={faMoon} className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu content (visible when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              className="block text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
