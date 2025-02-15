import React from "react";

const Features: React.FC = () => {
  const features = [
    { icon: "/icon1.svg", title: "Feature 1", description: "Description of feature 1." },
    { icon: "/icon2.svg", title: "Feature 2", description: "Description of feature 2." },
    { icon: "/icon3.svg", title: "Feature 3", description: "Description of feature 3." },
  ];

  return (
    <section id="features" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
              <img src={feature.icon} alt={feature.title} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
