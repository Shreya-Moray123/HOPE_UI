"use client";
import React from "react";

const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20 py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-xs text-gray-600 dark:text-gray-400">
      <p className="text-center md:text-left">
        &copy; {new Date().getFullYear()} H.O.P.E. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
          Terms of Service
        </a>
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
