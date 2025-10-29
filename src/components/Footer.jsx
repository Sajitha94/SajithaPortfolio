import React from "react";

const Footer = () => (
  <footer className="py-6 text-center text-sm bg-gray-100 text-gray-600">
    <p className="mb-2">
      © 2025 <span className="font-semibold text-teal-600">Sajitha S</span> —
      Code. Create. Collaborate.
    </p>

    <p>
      📧{" "}
      <a
        href="mailto:sajithasubramani94@gmail.com"
        className="text-teal-600 hover:underline"
      >
        sajithasubramani94@gmail.com
      </a>{" "}
      | 📞{" "}
      <a href="tel:+917812838749" className="text-teal-600 hover:underline">
        +91 78128 38749
      </a>
    </p>
  </footer>
);

export default Footer;
