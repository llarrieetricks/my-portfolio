import React from "react";
import profile from "./assets/profile.jpeg";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaShieldAlt, FaLinux, FaGithub,
  FaLinkedin, FaTwitter, FaEnvelope
} from "react-icons/fa";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans scroll-smooth">

      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Hillary Maranga</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#education" className="hover:text-blue-500 transition">Education</a></li>
            <li><a href="#hobbies" className="hover:text-blue-500 transition">Hobbies</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 pt-28 pb-20"
      >
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Hi, I’m Hillary
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg md:text-xl">
            Cybersecurity enthusiast & Web Developer. I build secure, responsive, and visually stunning web applications.
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            View My Projects
          </a>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-blue-400 transform hover:scale-105 transition duration-500 bg-gray-100 dark:bg-gray-800">
            <img
              src={profile}
              alt="Hillary Maranga"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left max-w-3xl mx-auto">
          I am a self-driven learner specializing in cybersecurity and web development. I enjoy creating
          interactive, secure, and user-friendly applications. Constantly exploring new technologies
          and improving my coding skills.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
            My Skills
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition duration-300">
              <FaHtml5 className="text-orange-500 text-5xl mb-4" />
              <h4 className="font-bold text-xl mb-2">Web Development</h4>
              <p className="text-gray-600 dark:text-gray-300">
                HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Express.js
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition duration-300">
              <FaDatabase className="text-blue-600 text-5xl mb-4" />
              <h4 className="font-bold text-xl mb-2">Databases</h4>
              <p className="text-gray-600 dark:text-gray-300">
                MySQL, MongoDB, PostgreSQL
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition duration-300">
              <FaShieldAlt className="text-red-500 text-5xl mb-4" />
              <h4 className="font-bold text-xl mb-2">Cybersecurity</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Ethical Hacking, Vulnerability Assessment, Network Security
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition duration-300">
              <div className="flex space-x-3 mb-4">
                <FaLinux className="text-gray-500 text-3xl" />
                <FaGithub className="text-gray-800 dark:text-white text-3xl" />
              </div>
              <h4 className="font-bold text-xl mb-2">Tools & Platforms</h4>
              <p className="text-gray-600 dark:text-gray-300">
                FastAPI, Git/GitHub, Linux/Kali
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 hover:shadow-2xl transition">
            <h4 className="font-bold text-xl mb-2">Portfolio Website</h4>
            <p className="text-gray-600 dark:text-gray-300">
              My personal portfolio website showcasing my projects and skills.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 hover:shadow-2xl transition">
            <h4 className="font-bold text-xl mb-2">Bug Tracker App</h4>
            <p className="text-gray-600 dark:text-gray-300">
              MERN stack application to track and manage bugs efficiently.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 hover:shadow-2xl transition">
            <h4 className="font-bold text-xl mb-2">Cybersecurity Labs</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Hands-on cybersecurity projects and penetration testing labs.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">Education</h3>
          <div className="space-y-6 text-left md:text-center">
            <div>
              <h4 className="font-bold text-xl">Bachelor's in Computer Science</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Dedan Kimathi University, 2023 - 2027 (Currently studying)
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl">Power Learn Project (PLP) Scholarship</h4>
              <p className="text-gray-600 dark:text-gray-300">
                February 2025 Cohort – Graduating November 2025.  
                Specialized in Full-Stack Web Development (MERN Stack).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-10">Hobbies & Interests</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Exploring technology, coding challenges, reading, fitness, and cybersecurity projects.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-gray-100">
            Get in Touch
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">
            I’m always open to discussing new projects, collaborations, or opportunities. Reach out to me through any of the channels below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-center">
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaEnvelope className="text-4xl text-blue-500 mb-3" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Email</h4>
              <a href="mailto:marangahillary710@gmail.com" className="text-blue-500 hover:underline">marangahillary710@gmail.com</a>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaGithub className="text-4xl text-gray-800 dark:text-white mb-3" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">GitHub</h4>
              <a href="https://github.com/llarrieetricks" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition">Visit my GitHub</a>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaLinkedin className="text-4xl text-blue-600 mb-3" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">LinkedIn</h4>
              <a href="https://linkedin.com/in/hillarymaranga" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400 transition">Connect on LinkedIn</a>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaTwitter className="text-4xl text-blue-400 mb-3" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Twitter</h4>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">@yourhandle</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-100 dark:from-gray-900 to-gray-200 dark:to-gray-800 py-12 mt-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Hillary Maranga</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Cybersecurity & Web Development Enthusiast. Passionate about building secure and modern web experiences.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Connect with me</h4>
            <p className="text-gray-600 dark:text-gray-300">marangahillary710@gmail.com</p>
            <div className="flex justify-center md:justify-start gap-4 mt-2 text-2xl">
              <a href="https://github.com/llarrieetricks" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/hillarymaranga" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400 transition">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          © 2025 Hillary Maranga. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
