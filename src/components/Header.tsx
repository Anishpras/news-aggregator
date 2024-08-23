import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          News Aggregator
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="text-gray-600 hover:text-gray-800">
              Search
            </Link>
          </li>
          <li>
            <Link
              to="/personalize"
              className="text-gray-600 hover:text-gray-800">
              Personalize
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
