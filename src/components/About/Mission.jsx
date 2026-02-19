import React, { useEffect } from "react";
import background from "../../assets/background.png"; // apni image ka path yahan lagao

const Mission = () => {
  console.log("Mission component rendered");

  useEffect(() => {
    console.log("Mission component mounted");
    return () => console.log("Mission component unmounted");
  }, []);

  return (
    <div
      className="relative bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          To empower businesses of all sizes by creating powerful, user-friendly
          and successful websites that drive growth and success.
        </p>
      </div>
    </div>
  );
};

export default Mission;
