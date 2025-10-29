import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-teal-600">Sajitha S</h1>

        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-teal-600 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {open && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white border-t text-center space-y-4 py-4"
        >
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-gray-700 font-medium hover:text-teal-600"
              >
                {link}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
