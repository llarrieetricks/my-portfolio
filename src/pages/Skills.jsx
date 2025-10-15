import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-10 text-center">Skills</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
            <h4 className="font-bold text-xl mb-2">Web Development</h4>
            <p className="text-gray-600 dark:text-gray-300">HTML, CSS, JavaScript, React, Tailwind CSS</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
            <h4 className="font-bold text-xl mb-2">Cybersecurity</h4>
            <p className="text-gray-600 dark:text-gray-300">Network Security, Ethical Hacking, Vulnerability Assessment</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
            <h4 className="font-bold text-xl mb-2">Databases</h4>
            <p className="text-gray-600 dark:text-gray-300">MySQL, MongoDB, PostgreSQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
