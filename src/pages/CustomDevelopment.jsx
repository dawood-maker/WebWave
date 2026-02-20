import React from "react";

const CustomDevelopment = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500 p-8">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white animate-text">
        Custom Software Development
      </h1>

      <p className="text-center text-lg md:text-xl max-w-2xl mb-10 text-gray-200">
        We craft tailored software solutions to help your business scale,
        streamline, and succeed. Modern, reliable, and fully customized to your
        needs.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-6">
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
          Get Started
        </button>

        <button className="px-6 py-3 border-2 border-white rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CustomDevelopment;
