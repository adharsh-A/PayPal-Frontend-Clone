import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import BusinessSolutions from './BusinessSolutions';
import FeatureCards from './FeatureCards';
import PaymentSolutions from './PaymentSolutions';
import Statistics from './Statistics';
import Footer from './Footer';
import 'animate.css'; // Import animate.css library

function Home() {
  return (
    <div className="font-sans">
      <Header />
      <section className="bg-gray-50">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6">
          <div className="max-w-md animate__animated animate__fadeInLeft">
            <h1 className="text-4xl font-bold text-gray-800">Sell just about anywhere in the world.</h1>
            <p className="text-lg text-gray-600 mt-4">
              Whether you have an online shop or need to accept payments remotely, we can help you get paid fast.
            </p>
            <div className="mt-6 space-x-2 flex flex-wrap">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 animate__animated animate__bounceIn"
                onClick={() => (window.location.href = '/signup.html')}
              >
                Sign Up
              </button>
              <button
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 animate__animated animate__bounceIn"
                onClick={() => (window.location.href = '#')}
              >
                Connect With Us
              </button>
            </div>
          </div>

          {/* Carousel Component with Animation */}
          <div className="animate__animated animate__fadeInRight">
            <Carousel />
          </div>
        </div>
      </section>
      <BusinessSolutions />
      <FeatureCards />
      <PaymentSolutions />
      <Statistics />
      <Footer />
    </div>
  );
}

export default Home;
