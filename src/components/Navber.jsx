import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import navbar from "../assets/navbar.png";
import background from "../assets/background.png";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Component Load Log
  useEffect(() => {
    console.log("Navbar Loaded ✅");
  }, []);

  // ✅ Toggle Function
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
    console.log("Menu Toggled 🔥", !menuOpen);
  };

  const handleNavClick = (item) => {
    console.log(`${item} Clicked 🚀`);
    setMenuOpen(false);
  };

  return (
    <nav className="relative sticky top-0 z-50 overflow-hidden">

      {/* Background Image */}
      <img
        src={background}
        alt="navbar background"
        className="absolute inset-0 w-full h-full object-cover -z-10 "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center backdrop-blur-md">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleNavClick("Home")}
          className="flex items-center space-x-3 group"
        >
          <img
            src={navbar}
            alt="Logo"
            className="w-10 h-10 object-contain transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 rounded-[10px]"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            WebWave
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white font-medium text-lg">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
                className="transition duration-300 group-hover:text-cyan-400"
              >
                {item}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <Link
          to="/get-started"
          onClick={() => handleNavClick("Get Started")}
          className="hidden md:inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggle}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white flex flex-col items-center space-y-6 py-6 text-lg backdrop-blur-md">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              onClick={() => handleNavClick(item)}
              className="hover:text-cyan-400 transition"
            >
              {item}
            </Link>
          ))}

          <Link
            to="/get-started"
            onClick={() => handleNavClick("Get Started")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-xl font-semibold"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navber;
