// src/components/Statistics.jsx
import React, { useEffect, useRef, useState } from 'react';
import 'animate.css'; // Import animate.css

const Statistics = () => {
  const stats = [
    {
      icon: 'fas fa-users',
      label: '427M active accounts.',
    },
    {
      icon: 'fas fa-exchange-alt',
      label: '6.5B Total payment transactions.',
    },
    {
      icon: 'fas fa-dollar-sign',
      label: '$403.9B total payment volume.',
    },
    {
      icon: 'fas fa-thumbs-up',
      label: '74% increase in buyer confidence.',
    },
  ];

  const [isVisible, setIsVisible] = useState(Array(stats.length).fill(false)); // Track visibility of each stat

  const statsRefs = useRef([]); // Create a ref to hold references to each stat element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = statsRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setIsVisible((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true; // Set the respective stat to visible
                return newVisible;
              });
              observer.unobserve(entry.target); // Stop observing once it's visible
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    // Observe each stat element
    statsRefs.current.forEach((stat) => {
      if (stat) {
        observer.observe(stat);
      }
    });

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold">BayPal by the numbers.</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Changed to grid-cols-2 for 2 columns */}
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRefs.current[index] = el)} // Set the ref for each stat
              className={isVisible[index] ? 'animate__animated animate__backInDown' : ''} // Add animation class based on visibility
            >
              <i className={`${stat.icon} fa-2x text-blue-600`}></i>
              <p className="text-lg font-semibold mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
