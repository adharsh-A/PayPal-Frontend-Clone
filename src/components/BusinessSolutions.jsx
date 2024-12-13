// src/components/BusinessSolutions.jsx
import React from 'react';
import "animate.css";

const BusinessSolutions = () => {
  return (
    <section className="bg-blue-900 text-white py-4 animate__animated animate__fadeInUp">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-lg mb-4 md:mb-0">
          Looking for BayPal Business Solutions? Across regions and around the world, we are here to support you.
        </p>
        <button className="bg-white text-blue-900 px-4 py-2 rounded-md">
          BayPal for business
        </button>
      </div>
    </section>
  );
};

export default BusinessSolutions;
