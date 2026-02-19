import React from "react";
import background from "../../assets/background.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-white pt-24 pb-14"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark Glass Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Contact Us
          </h4>

          <p className="hover:text-blue-400 transition duration-300 cursor-pointer">
            info@gmail.com
          </p>

          <p className="hover:text-purple-400 transition duration-300 cursor-pointer">
            +92 03217454974
          </p>
        </div>

        {/* Social Section */}
        <div className="space-y-6">
          <h4 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500">
            Follow Us
          </h4>

          <div className="flex justify-center gap-8">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-blue-600 transition duration-300 transform hover:scale-125 shadow-lg hover:shadow-blue-500/50"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-sky-500 transition duration-300 transform hover:scale-125 shadow-lg hover:shadow-sky-400/50"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-pink-600 transition duration-300 transform hover:scale-125 shadow-lg hover:shadow-pink-500/50"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-blue-700 transition duration-300 transform hover:scale-125 shadow-lg hover:shadow-blue-600/50"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
            Quick Links
          </h4>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-green-400 transition duration-300 hover:tracking-wider"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-green-400 transition duration-300 hover:tracking-wider"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-green-400 transition duration-300 hover:tracking-wider"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-green-400 transition duration-300 hover:tracking-wider"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="relative mt-16 border-t border-white/20 pt-6 text-center text-sm text-gray-400">
        © 2026 WebWave. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
