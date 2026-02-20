import computer2 from "../../assets/computer2.png"; // corrected path
import CheckmarksList from "./CheckmarksList";

const HeroSection = () => {
  const checkItems = [
    "No Obligation Consultation.",
    "Expert Advice & Guidance",
    "Friendly, Responsive Team",
  ];

  return (
    <div className="flex flex-col md:flex-row items-start justify-between px-6 pt-2 pb-4 relative z-10 gap-6">
      {/* LEFT TEXT */}
      <div className="flex-1 pr-2">
        <h1 className="text-3xl font-extrabold leading-tight mb-1">
          Ready to Grow Your
        </h1>
        <h1 className="text-3xl font-extrabold text-cyan-400 leading-tight mb-4">
          Online Presence?
        </h1>
        <h2 className="text-lg font-bold leading-snug mb-3">
          Let's Build Something<br />Amazing Together!
        </h2>
        <p className="text-xs text-gray-200 leading-relaxed mb-4 max-w-[250px]">
          Contact us today to discuss your project and discover how we can
          help your business innovate with a website tailored to your needs.
        </p>

        <CheckmarksList items={checkItems} />
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-44 flex-shrink-0 relative h-52">
        <img
          src={computer2}
          alt="Tech Illustration"
          className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl border border-purple-500/40"
        />
      </div>
    </div>
  );
};

export default HeroSection;