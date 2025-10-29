import React from "react";

const Experience = () => (
  <section id="experience" className="py-16 bg-gray-50 text-center">
    <h2 className="text-3xl font-semibold mb-6 text-teal-600">Experience</h2>

    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6">
      <h3 className="font-bold text-xl">
        Frontend Developer @{" "}
        <a
          href="https://www.linkedin.com/company/amicosolutions/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:underline"
        >
          Amico Company
        </a>
      </h3>

      <p className="text-gray-500 mb-2">Aug 2022 – Present</p>

      <ul className="text-gray-700 list-disc text-left mx-auto w-fit">
        <li>Developed scalable front-end apps with Angular</li>
        <li>Collaborated with UI/UX designers for pixel-perfect UI</li>
        <li>Enhanced performance through lazy loading & API optimization</li>
      </ul>
    </div>
  </section>
);

export default Experience;
