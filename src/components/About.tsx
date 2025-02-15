import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-gray-800 dark:text-white"
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Welcome to our Learning Management System (LMS) platform! We are dedicated to transforming the way people learn by providing innovative, user-friendly tools that cater to diverse educational needs.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Our mission is to empower learners and educators with cutting-edge technology that enhances engagement, accessibility, and effectiveness in education.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {/* Team Member Cards */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-md mx-auto md:max-w-none"
            >
              <img
                src="/team-member-1.jpg" // Replace with actual image path
                alt="Team Member 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                John Doe
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Founder & CEO
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-md mx-auto md:max-w-none"
            >
              <img
                src="/team-member-2.jpg" // Replace with actual image path
                alt="Team Member 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Jane Smith
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lead Developer
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
