import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaFilePdf,
} from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-16 text-center bg-white">
    <h2 className="text-3xl font-semibold mb-6 text-teal-600">
      Connect With Me
    </h2>

    <div className="flex justify-center gap-6 mb-6">
      <a
        href="mailto:sajithasubramani94@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaEnvelope className="text-3xl text-teal-600 hover:text-teal-700" />
      </a>
      <a
        href="https://linkedin.com/in/sajitha-s-65a5a4368"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="text-3xl text-teal-600 hover:text-teal-700" />
      </a>
      <a href="https://github.com/Sajitha94" target="_blank" rel="noreferrer">
        <FaGithub className="text-3xl text-teal-600 hover:text-teal-700" />
      </a>
      <a href="tel:+917812838749">
        <FaPhoneAlt className="text-3xl text-teal-600 hover:text-teal-700" />
      </a>
      {/* ✅ Resume opens in a new tab */}
      <a href="/SajithaResume.pdf" target="_blank" rel="noopener noreferrer">
        <FaFilePdf className="text-3xl text-teal-600 hover:text-teal-700" />
      </a>
    </div>
  </section>
);

export default Contact;
