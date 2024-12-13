// src/components/Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          <img src="https://placehold.co/120x40" alt="BayPal logo" className="h-10" />
        </div>
        <nav className="flex space-x-8">
          {/* Dropdown Menu Component */}
          {['INDIVIDUAL', 'BUSINESS', 'PARTNERS', 'USEFUL INFO'].map((menu) => (
            <div key={menu} className="relative dropdown">
              <button
                onClick={() => handleDropdown(menu)}
                className="text-sm text-gray-700 focus:outline-none"
              >
                {menu}
              </button>
              <div
                className={`absolute z-10 left-0 top-4 mt-2 w-48 bg-white border rounded-lg shadow-lg dropdown-menu ${
                  activeDropdown === menu ? 'block' : 'hidden'
                }`}
              >
                {menu === 'INDIVIDUAL' && (
                  <>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Personal Account
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      BayPal Credit
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Security
                    </a>
                  </>
                )}
                {menu === 'BUSINESS' && (
                  <>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Merchant Services
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Business Account
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Payment Solutions
                    </a>
                  </>
                )}
                {menu === 'PARTNERS' && (
                  <>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Partner Program
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Developer Tools
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Integration Services
                    </a>
                  </>
                )}
                {menu === 'USEFUL INFO' && (
                  <>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Help Center
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Contact Us
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Fees
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </nav>
        <div className="space-x-4">
          <button
            className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md"
          >
            Log In
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
