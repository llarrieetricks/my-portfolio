import React from "react";

const Projects = () => {
  const projectList = [
    {
      name: "DeKUSDA Website",
      description: "A church website built with React, Tailwind CSS, and Vite.",
      link: "https://github.com/llarrieetricks/DeKUSDA-Website",
    },
    {
      name: "Bug Tracker App",
      description: "A full-stack MERN bug tracker application for project management.",
      link: "https://github.com/llarrieetricks/bug-tracker",
    },
    {
      name: "Secure File Encryption App",
      description: "Python AES-256 encryption/decryption tool for secure file handling.",
      link: "https://github.com/llarrieetricks/secure-file-encryption",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h3 className="text-3xl font-bold mb-6">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((project) => (
          <div key={project.name} className="p-6 border rounded-md border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
