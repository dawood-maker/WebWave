import { Link } from "react-router-dom";
import { useEffect } from "react";
import Wabwave from "../../assets/Wabwave.png";
import background from "../../assets/background.png";

const Header = () => {
  console.log("Header component rendered"); // ✅ Logs every render

  // ✅ Component Mount / Unmount Console
  useEffect(() => {
    console.log("Header Component Mounted 🚀");
    return () => console.log("Header Component Unmounted ❌");
  }, []);

  // ✅ Button Click Handlers
  const handleLearnMore = () => {
    console.log("Learn More Button Clicked 🔥");
  };

  const handleGetStarted = () => {
    console.log("Get Started Button Clicked ✅");
  };

  // ✅ Image Load Events
  const handleBackgroundLoad = () => console.log("Background Image Loaded 🌄");
  const handleLogoLoad = () => console.log("WebWave Logo Loaded 🌟");

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 overflow-hidden">
      {/* Background Image */}
      <img
        src={background}
        alt="background"
        onLoad={handleBackgroundLoad}
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 py-16">
        {/* Left Content */}
        <div className="text-center lg:text-left flex-1 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            Build Your{" "}
            <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Dream Website
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            Create. Innovate. Elevate. We build modern, fast and stunning
            websites for your brand.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/get-started"
              onClick={handleGetStarted}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 text-center"
            >
              Get Started
            </Link>

            <button onClick={handleLearnMore}>
              <Link
                to="/learn-more"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-xl font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-black"
              >
                Learn More
              </Link>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mb-10 lg:mb-0">
          <img
            src={Wabwave}
            alt="WebWave"
            onLoad={handleLogoLoad}
            className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] xl:w-[550px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
