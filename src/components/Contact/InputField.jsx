import React from "react";

export default function InputField({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  // Handle input change with logging
  const handleChange = (e) => {
    console.log(`Input changed - ${name}:`, e.target.value);
    onChange(e); // propagate the change back to parent
  };

  // Handle focus with logging
  const handleFocus = (e) => {
    console.log(`Input focused - ${name}`);
    e.target.style.borderColor = "rgba(79,142,247,0.7)";
  };

  // Handle blur with logging
  const handleBlur = (e) => {
    console.log(`Input blurred - ${name}`);
    e.target.style.borderColor = "rgba(79,142,247,0.25)";
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-blue-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500"
      style={{
        background: "rgba(26,26,74,0.6)",
        border: "1px solid rgba(79,142,247,0.25)",
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}
