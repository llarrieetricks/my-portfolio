import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 border-t border-gray-200 dark:border-gray-700 mt-20">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Hillary Maranga. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
