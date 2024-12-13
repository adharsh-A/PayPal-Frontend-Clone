import React from 'react';
import { useInView } from 'react-intersection-observer';

const PaymentSolutions = () => {
  // Using useInView to detect if the elements are in the viewport
  const [textRef, textInView] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [imageRef, imageInView] = useInView({ triggerOnce: false, threshold: 0.5 });

  return (
    <section className="bg-slate-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-white" >Make and receive payments with ease.</h2>
        <p className="text-lg text-center text-slate-300 mt-4">Popular payments, happy customers.</p>
        <div className="mt-10 flex flex-col md:flex-row justify-evenly items-center">
          {/* Text Section with animation */}
          <div
            ref={textRef}
            className={`max-w-md transition-opacity duration-700 ease-out ${
              textInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-white">
              Help maximize conversion and reduce cart abandonment with a wide range of digital payment options, customizable in one account.
            </p>
            <button
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              onClick={() => (window.location.href = '#')}
            >
              Optimize Checkout
            </button>
          </div>

          {/* Image Section with animation */}
          <img
            ref={imageRef}
            src="https://placehold.co/300x500"
            alt="Payment checkout screen on mobile"
            className={`rounded-lg mt-6 md:mt-0 transition-all transform duration-700 ease-out ${
              imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentSolutions;
