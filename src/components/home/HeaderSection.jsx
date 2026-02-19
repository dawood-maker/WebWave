import React, { useEffect } from "react";
import computer from "../../assets/computer.png";
import background from "../../assets/background.png";

function HeaderSection() {
  // ✅ Log every render
  console.log("HeaderSection component rendered");

  // ✅ Log component mount/unmount
  useEffect(() => {
    console.log("HeaderSection Mounted 🚀");
    return () => console.log("HeaderSection Unmounted ❌");
  }, []);

  // ✅ Button click handler
  const handleStartProject = () => {
    console.log("Start Your Project Button Clicked 🎯");
  };

  // ✅ Image load handler
  const handleImageLoad = () => {
    console.log("Computer Image Loaded 💻");
  };

  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-20 md:py-32"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6 md:px-0">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Bring Your Ideas to Life
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            Easy, Fast & Professional. Build your website without coding!
          </p>
          <ul className="mb-8 space-y-3 text-left max-w-md mx-auto md:mx-0">
            <li className="flex items-center gap-2 text-lg md:text-xl">
              <span className="text-green-400 text-2xl">✅</span> Drag & Drop
              Builder
            </li>
            <li className="flex items-center gap-2 text-lg md:text-xl">
              <span className="text-green-400 text-2xl">✅</span> No Coding
              Required
            </li>
            <li className="flex items-center gap-2 text-lg md:text-xl">
              <span className="text-green-400 text-2xl">✅</span> Fully
              Customizable
            </li>
          </ul>
          <button
            onClick={handleStartProject}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Start Your Project
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 relative z-10">
          <img
            src={computer}
            alt="Website Builder"
            onLoad={handleImageLoad}
            className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
