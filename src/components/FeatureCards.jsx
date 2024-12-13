import React from 'react';
import { useInView } from 'react-intersection-observer';

const FeatureCards = () => {
  const features = [
    {
      img: 'https://placehold.co/200x150',
      title: 'The world is your shopping mall.',
      description:
        'From big brands to little boutiques, you can shop safely at over millions of online stores with BayPal.',
      buttonText: 'Shop Now',
      buttonLink: '#',
    },
    {
      img: 'https://placehold.co/200x150',
      title: 'Pay with your preferred card.',
      description:
        'Link all your cards and choose which one to use at checkout. Shopping online has never been this easy.',
      buttonText: 'Link a Card Now',
      buttonLink: '#',
    },
    {
      img: 'https://placehold.co/200x150',
      title: 'Shop online with confidence.',
      description:
        'Shop online with confidence – with 24/7 fraud monitoring and Buyer Protection on eligible purchases.',
      buttonText: 'Find Out More',
      buttonLink: '#',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">Find more ways to shop with BayPal for you.</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when 30% of the element is in view
    triggerOnce: false, // Trigger every time the element enters the viewport
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } text-center`}
    >
      <img src={feature.img} alt={feature.title} className="mx-auto" />
      <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
      <p className="text-gray-600 mt-2">{feature.description}</p>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={() => (window.location.href = feature.buttonLink)}
      >
        {feature.buttonText}
      </button>
    </div>
  );
};

export default FeatureCards;
