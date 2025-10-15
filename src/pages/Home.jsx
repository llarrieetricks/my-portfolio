import React from "react";
import profile from "../assets/profile.jpeg"; // Make sure the path is correct

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full mb-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Hi, I’m Hillary Maranga</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Cybersecurity enthusiast & Web Developer. I love building secure, efficient, and beautiful web applications.
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            View Projects
          </a>
        </div>

        {/* Profile Image with Hover Effect */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={profile}
            alt="Hillary Maranga"
            className="w-64 h-64 rounded-full object-cover shadow-lg transform transition duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
            <p className="font-medium">HTML</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
            <p className="font-medium">CSS / Tailwind</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
            <p className="font-medium">JavaScript / React</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
            <p className="font-medium">Node.js / Express</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p>My personal portfolio website showcasing my projects and skills.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Bug Tracker App</h3>
            <p>A MERN stack application to track and manage bugs efficiently.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p>If you want to work with me or just say hi, feel free to reach out!</p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="mailto:hillary@example.com"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/llarrieetricks"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            GitHub
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
