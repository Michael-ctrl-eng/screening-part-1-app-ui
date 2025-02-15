import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center py-20 dark:bg-gray-900"
      style={{ backgroundImage: "url('/hero-image.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Platform</h1>
        <p className="text-lg text-white opacity-80 mb-8">
          Transform your learning experience today!
        </p>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
