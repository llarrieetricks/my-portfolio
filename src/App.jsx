import React, { useEffect, useState } from "react";
import profile from "./assets/profile.jpeg";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaShieldAlt,
  FaLinux,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans scroll-smooth">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
            Hillary Maranga
          </h1>
          <ul className="hidden md:flex space-x-8 font-medium">
            {["Home", "Skills", "Projects", "Education", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="relative hover:text-blue-600 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* Hero + About */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 pt-32 pb-24"
      >
        {/* Left Column: Intro + About */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fadeInLeft">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-fadeInUp">
            Hi, I’m Hillary
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            Cybersecurity enthusiast & Web Developer. I build secure, responsive,
            and visually stunning web applications.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
            I’m a self-driven learner specializing in cybersecurity and web
            development. I enjoy crafting interactive, secure, and user-friendly
            applications while constantly exploring new technologies.
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 mt-4"
          >
            View My Projects
          </a>
        </div>

        {/* Right Column: Profile Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center animate-fadeInRight">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500/50 hover:scale-105 transition-transform duration-500">
            <img
              src={profile}
              alt="Hillary Maranga"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-24 animate-fadeInUp"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center">My Skills</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaHtml5 className="text-orange-500 text-5xl mb-4" />,
                title: "Web Development",
                desc: "HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Express.js",
              },
              {
                icon: <FaDatabase className="text-blue-600 text-5xl mb-4" />,
                title: "Databases",
                desc: "MySQL, MongoDB",
              },
              {
                icon: <FaShieldAlt className="text-red-500 text-5xl mb-4" />,
                title: "Cybersecurity",
                desc: "Ethical Hacking, Network Security",
              },
              {
                icon: (
                  <div className="flex space-x-3 mb-4">
                    <FaLinux className="text-gray-500 text-3xl" />
                    <FaGithub className="text-gray-800 dark:text-white text-3xl" />
                  </div>
                ),
                title: "Tools & Platforms",
                desc: "FastAPI, Git/GitHub, Linux/Kali",
              },
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                {skill.icon}
                <h4 className="font-bold text-xl mb-2">{skill.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-4 animate-fadeInUp">
        <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Portfolio Website",
              desc: "My personal portfolio website showcasing my projects and skills.",
            },
            {
              title: "Bug Tracker App",
              desc: "MERN stack application to track and manage bugs efficiently.",
            },
            {
              title: "Cybersecurity Labs",
              desc: "Hands-on cybersecurity projects and penetration testing labs.",
            },
          ].map((proj, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition p-6"
            >
              <h4 className="font-bold text-xl mb-2 text-blue-600 dark:text-blue-400">
                {proj.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="bg-gray-100 dark:bg-gray-800 py-24 bg-cover bg-center bg-fixed border-t border-gray-300 dark:border-gray-700 animate-fadeInUp"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center bg-black/50 rounded-2xl py-16">
          <h3 className="text-3xl font-bold mb-10 text-white">Education</h3>
          <div className="space-y-6 text-gray-200">
            <div>
              <h4 className="font-bold text-xl text-white">
                Bachelor’s in Computer Science
              </h4>
              <p>Dedan Kimathi University, 2023 - 2027 (Ongoing)</p>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white">
                Power Learn Project (PLP) Scholarship
              </h4>
              <p>
                Feb 2025 Cohort – Graduating Nov 2025. Specialized in Full-Stack
                Web Development (MERN Stack).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gray-100 dark:bg-gray-800 bg-cover bg-center bg-fixed border-t border-gray-300 dark:border-gray-700 animate-fadeInUp"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="max-w-6xl mx-auto text-center bg-black/50 rounded-2xl py-16">
          <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
          <div className="flex justify-center space-x-10 text-4xl text-white">
            <a
              href="mailto:marangahillary710@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/llarrieetricks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/hillarymaranga"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-100 dark:from-gray-900 to-gray-200 dark:to-gray-800 py-12 border-t border-gray-300 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About */}
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Hillary Maranga
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Crafted with passion for cybersecurity and design excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-400">
              {["Home", "Skills", "Projects", "Education", "Contact"].map(
                (link, idx) => (
                  <a
                    key={idx}
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-blue-600 transition"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Connect with Me
            </h4>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl text-gray-600 dark:text-gray-400">
              <a
                href="mailto:marangahillary710@gmail.com"
                className="hover:text-blue-400 transition"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/llarrieetricks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/hillarymaranga"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          © 2025 Hillary Maranga. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
