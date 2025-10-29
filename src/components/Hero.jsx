import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-teal-100 to-white text-center px-4"
    >
      <motion.img
        src="src/assets/sajiprofile.png"
        alt="Sajitha"
        className="w-40 h-43 rounded-full shadow-lg mb-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hi, I'm Sajitha S 👋
      </motion.h1>

      <motion.h2
        className="text-lg text-gray-700 mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Full Stack Developer | Modern Web Apps
      </motion.h2>

      <ReactTyped
        strings={[
          "Frontend Developer | Angular and React",
          "Passionate about Code and UI Design",
          "MERN Stack Enthusiast 💻",
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
        className="text-teal-600 text-lg font-medium mt-2"
      />

      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
