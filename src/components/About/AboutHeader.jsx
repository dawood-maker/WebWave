import React from "react";
import background from "../../assets/background.png";

const AboutHeader = () => {
  return (
    <div
      className="relative h-[80vh] flex items-center justify-center text-white bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Strong Dark + Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-indigo-900/60 to-black/80"></div>

      {/* Glow Effect Background */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* Glass Content */}
      <div className="relative backdrop-blur-xl bg-white/10 px-12 py-14 rounded-3xl text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/20 max-w-3xl mx-6 transition duration-500 hover:scale-105">

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wider leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Us
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 tracking-wide">
          Who We Are
        </p>

        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>

      </div>
    </div>
  );
};

export default AboutHeader;