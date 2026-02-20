import React from "react";
import { Link } from "react-router-dom";

const SEO = () => {

  const handleGetStarted = () => {
    console.log("Get Started Clicked");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 relative overflow-hidden">
      
      {/* Glow Background Effect */}
      <div className="absolute w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-3xl top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl bottom-20 -right-20"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
          SEO Optimization Services
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-gray-300 leading-relaxed mb-8">
          We help your website rank higher in search engines, increase
          visibility, and drive high-quality organic traffic that converts into
          real business growth.
        </p>

        <Link
          to="/get-started"
          onClick={handleGetStarted}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 text-center inline-block"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default SEO;