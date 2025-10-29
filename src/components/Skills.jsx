import React from "react";

const Skills = () => {
  const icons = [
    "html", "css", "js", "ts", "react", "angular",
    "nodejs", "express", "mongodb", "tailwind", "github", "vscode", "netlify"
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-6 text-teal-600">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {icons.map((icon) => (
          <img
            key={icon}
            src={`https://skillicons.dev/icons?i=${icon}`}
            alt={icon}
            className="w-12 h-12"
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
