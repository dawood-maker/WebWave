import { useState } from "react";

const NameInput = () => {
  const [name, setName] = useState("");

  // Log every time the component renders
  console.log("NameInput component rendered, current name:", name);

  const handleInputChange = (e) => {
    console.log("Name input changed:", e.target.value);
    setName(e.target.value);
  };

  const handleSend = () => {
    console.log("Send button clicked with name:", name || "there");
    alert(`Hello, ${name || "there"}!`);
  };

  return (
    <div className="flex gap-2 px-6 py-3 relative z-10">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleInputChange}
        className="flex-1 rounded-lg px-4 py-3 text-gray-800 text-sm font-medium outline-none bg-white placeholder-gray-400"
      />
      <button
        onClick={handleSend}
        className="px-6 py-3 rounded-lg font-bold text-sm text-white transition-all hover:opacity-90"
        style={{ background: "linear-gradient(90deg, #9c27b0, #e040fb)" }}
      >
        Send
      </button>
    </div>
  );
};

export default NameInput;