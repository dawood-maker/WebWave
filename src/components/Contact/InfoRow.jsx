import React from "react";

export default function InfoRow({ icon, text }) {
  console.log("InfoRow rendered with icon and text:", { icon, text });

  return (
    <div className="flex items-start gap-3 text-blue-300 text-sm">
      <span className="mt-0.5 text-blue-400 flex-shrink-0">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
