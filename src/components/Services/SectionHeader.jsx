import React from "react";

// Reusable Header Section
const SectionHeader = () => {
  return (
    <>
      {/* Logo */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          W
        </span>{" "}
        WebWave
      </h1>

      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Our Premium Services
      </h2>

      <p className="text-gray-300 mb-14 text-lg">
        We build powerful digital experiences that grow your business.
      </p>
    </>
  );
};

export default SectionHeader;
