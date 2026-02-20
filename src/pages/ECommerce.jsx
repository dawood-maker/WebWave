import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.png";

const ECommerce = () => {
  const navigate = useNavigate();

  console.log("ECommerce component rendered");

  const handleExploreProducts = () => {
    console.log("Explore Products button clicked - navigating to /web-design");
    navigate("/web-design");
  };

  const handleGetStarted = () => {
    console.log("Get Started button clicked - navigating to /get-started");
    navigate("/get-started");
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white p-10 overflow-hidden">
      {/* Background images */}
      <img
        src={background}
        alt="Tech background 1"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {console.log("Background image 1 rendered")}

      <img
        src="https://images.unsplash.com/photo-1600180758895-4c40d2e7500b?auto=format&fit=crop&w=1500&q=80"
        alt="Tech background 2"
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
      />
      {console.log("Background image 2 rendered")}

      {/* Content */}
      <h1 className="relative text-6xl md:text-7xl font-extrabold text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400 animate-text">
        Welcome to Amazing E-Commerce
      </h1>
      {console.log("Main heading rendered")}

      <p className="relative text-xl md:text-2xl text-gray-100 text-center mb-10 max-w-2xl">
        Discover the latest gadgets, fashion, and tech products. Shop your
        favorites with ease and style!
      </p>
      {console.log("Paragraph content rendered")}

      <div className="relative flex gap-6">
        <button
          onClick={handleExploreProducts}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-300"
        >
          Explore Products
        </button>

        <button
          onClick={handleGetStarted}
          className="px-8 py-4 border-2 border-white rounded-xl font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
        >
          Get Started
        </button>
      </div>
      {console.log("CTA buttons rendered")}

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      {console.log("Decorative circles rendered")}
    </div>
  );
};

export default ECommerce;
