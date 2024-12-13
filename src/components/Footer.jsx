// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the global community of BayPal users</h2>
        <p className="text-lg mb-6">
          Sign up now and start sending, spending, and receiving money securely every day.
        </p>
        <button
          className="mt-6 bg-white text-blue-900 px-8 py-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          onClick={() => (window.location.href = '/signup.html')}
        >
          Sign Up Now
        </button>
      </div>

      {/* Footer Links and Terms */}
      <div className="mt-10 border-t border-gray-700 pt-10 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gray-300 transition duration-300">About Us</a>
          <a href="#" className="hover:text-gray-300 transition duration-300">Contact</a>
          <a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition duration-300">FAQ</a>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="text-sm">
          Terms & Conditions apply. See more details at the bottom of the website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
