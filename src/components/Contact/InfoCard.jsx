import React from "react";

export default function InfoCard({ children }) {
  console.log("InfoCard rendered with children:", children);

  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: "rgba(26,26,74,0.4)",
        border: "1px solid rgba(79,142,247,0.2)",
      }}
    >
      {children}
    </div>
  );
}
