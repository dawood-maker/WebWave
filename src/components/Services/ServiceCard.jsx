import React from "react";

// Reusable Service Card
const ServiceCard = ({ title, desc }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl hover:scale-105 hover:bg-white/20 transition duration-500">
      {/* Title */}
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 mb-6">{desc}</p>

      {/* Button */}
      <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/40 transition">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
