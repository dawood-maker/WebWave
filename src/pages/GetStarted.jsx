import { useNavigate } from "react-router-dom";
import background from "../assets/background.png"; // correct
import CTAButton from "../components/getstart/CTAButton";
import NameInput from "../components/getstart/NameInput";
import TrustedLogos from "../components/getstart/TrustedLogos";
import HeroSection from "../components/getstart/HeroSection";

const GetStarted = () => {
  const navigate = useNavigate();

  console.log("GetStarted component rendered");

  const handleCTA = () => {
    console.log("CTA Button clicked - navigating to /consultation");
    navigate("/consultation");
  };

  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden font-sans">
      {/* BACKGROUND IMAGE */}
      <img
        src={background}
        alt="Tech background"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      {console.log("Background image rendered")}

      {/* Background glow blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-blue-600 opacity-15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600 opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      {console.log("Background glow blobs rendered")}

      {/* NAV */}
      <nav className="flex items-center gap-2 px-6 py-4 relative z-10">
        <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-extrabold text-lg italic shadow-lg">
          W
        </div>
        <span className="text-xl font-bold tracking-wide">Get Started</span>
      </nav>
      {console.log("Navigation bar rendered")}

      {/* HERO SECTION */}
      <HeroSection />
      {console.log("HeroSection component rendered")}

      {/* CTA BUTTON */}
      <div className="px-6 pb-4 relative z-10">
        <CTAButton text="Get A Free Consultation" onClick={handleCTA} />
        <div className="flex items-center gap-2 mt-3 text-sm text-gray-300">
          <span>📞</span>
          <span>Call Us Now: +123 456 7890</span>
        </div>
      </div>
      {console.log("CTA section rendered")}

      {/* NAME INPUT */}
      <NameInput />
      {console.log("NameInput component rendered")}

      {/* Trusted By Logos */}
      <TrustedLogos />
      {console.log("TrustedLogos component rendered")}

      {/* Footer */}
      <div className="text-center text-[10px] text-gray-500 pb-4 relative z-10">
        © 2024 WebWave. All rights reserved.
      </div>
      {console.log("Footer rendered")}
    </div>
  );
};

export default GetStarted;
