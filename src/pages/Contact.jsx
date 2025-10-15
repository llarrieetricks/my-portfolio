import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Icons

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Contact Me</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          I’m open to collaborating on projects, discussing cybersecurity, or just connecting. Feel free to reach out!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:hillary@example.com"
            className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <FaEnvelope className="text-blue-500 text-2xl" />
            <span className="text-gray-800 dark:text-gray-100 font-medium">hillary@example.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/hillarymaranga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <FaLinkedin className="text-blue-600 text-2xl" />
            <span className="text-gray-800 dark:text-gray-100 font-medium">linkedin.com/in/hillarymaranga</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/llarrieetricks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <FaGithub className="text-gray-900 dark:text-gray-100 text-2xl" />
            <span className="text-gray-800 dark:text-gray-100 font-medium">github.com/llarrieetricks</span>
          </a>
        </div>

        {/* Optional small note */}
        <p className="mt-10 text-gray-500 dark:text-gray-400 text-sm">
          I usually respond within 24 hours. Looking forward to hearing from you!
        </p>
      </div>
    </section>
  );
};

export default Contact;
