import React from "react";

// Reusable Stats Card
const StatsCard = ({ num, label }) => {
  return (
    <div>
      <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        {num}
      </h3>

      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
};

export default StatsCard;
