import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "PetzAdop (MERN Stack)",
    desc: "Full-stack pet adoption platform built with MongoDB, Express, React & Node.js.",
    link: "https://petzadop-frontend.netlify.app/",
    emoji: "🐾",
    tech: ["MERN", "React", "Tailwind"],
  },
  {
    name: "Notes App",
    desc: "Simple and efficient Notes application built with React & Tailwind.",
    link: "https://project-01-notesapp.netlify.app/",
    emoji: "📝",
    tech: ["React", "Tailwind"],
  },
  {
    name: "Niha's Kitchen Restaurant App",
    desc: "Responsive restaurant web app showcasing menus and navigation using React and Tailwind CSS.",
    link: "https://nihakitchen.netlify.app/",
    emoji: "🍽️",
    tech: ["React", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-white text-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-teal-600"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🚀 Featured Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="border rounded-2xl shadow-md p-6 bg-white hover:shadow-xl transition-transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-2">{proj.emoji}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {proj.name}
            </h3>
            <p className="text-gray-600 mb-4">{proj.desc}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {proj.tech.map((t, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-teal-100 text-teal-700 font-medium rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-teal-600 font-semibold hover:underline"
            >
              🔗 Live Demo
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
