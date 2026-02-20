import React, { useState } from "react";
import background from "../assets/background.png";

// ─── ICONS ───────────────────────────────────────────────
const RocketIcon = () => (
  <svg
    className="w-6 h-6 mx-auto mb-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.12a14.978 14.978 0 00-2.34 10.65m5.84 2.56a11.04 11.04 0 00-2.5-6.95m2.5 6.95l-3.26 3.26M11.29 12.7l-2.27 2.27"
    />
  </svg>
);
const CodeIcon = () => (
  <svg
    className="w-6 h-6 mx-auto mb-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);
const ShieldIcon = () => (
  <svg
    className="w-6 h-6 mx-auto mb-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);
const SpeedIcon = () => (
  <svg
    className="w-6 h-6 mx-auto mb-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);
const SupportIcon = () => (
  <svg
    className="w-6 h-6 mx-auto mb-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

// ─── DATA ───────────────────────────────────────────────
const stats = [
  { value: "300+", label: "Happy Clients" },
  { value: "1,500+", label: "Projects Done" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "5★", label: "Customer Rating" },
];

const features = [
  {
    icon: <CodeIcon />,
    title: "Modern Development",
    desc: "Latest tech use karke fast aur responsive websites banate hain.",
    color: "#4F8EF7",
  },
  {
    icon: <ShieldIcon />,
    title: "Secure & Reliable",
    desc: "Har project mein security first priority.",
    color: "#7C3AED",
  },
  {
    icon: <SpeedIcon />,
    title: "Lightning Fast",
    desc: "Optimized performance ke saath fast load.",
    color: "#00D4FF",
  },
  {
    icon: <SupportIcon />,
    title: "24/7 Support",
    desc: "Team hamesha available hai.",
    color: "#F59E0B",
  },
];

const benefits = [
  "Free consultation aur project planning",
  "100% responsive design",
  "SEO optimized websites",
  "Lifetime technical support",
  "Fast delivery guaranteed",
  "Money back guarantee",
];

const faqs = [
  {
    q: "WebWave kya services provide karta hai?",
    a: "Web development, mobile apps, UI/UX design, SEO aur digital marketing.",
  },
  {
    q: "Project complete hone ka time?",
    a: "1-8 hafton ka time lagta hai complexity ke hisaab se.",
  },
  {
    q: "Pricing?",
    a: "Har project alag hota hai, contact karein free consultation ke liye.",
  },
  {
    q: "Payment installments?",
    a: "Haan, 50% advance aur 50% project complete hone par.",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────
const LearnMore = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div
      className="min-h-screen w-full px-6 py-12 text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div> {/* dark overlay */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold mb-10 text-center">
          Learn More About WebWave
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl font-extrabold">{s.value}</div>
              <div className="text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-10 max-w-md mx-auto">
          {["features", "benefits", "faq"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-colors duration-300 ${activeTab === tab ? "bg-blue-600" : "bg-white/20 hover:bg-white/40"}`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Features */}
        {activeTab === "features" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
              >
                <div style={{ color: f.color }}>{f.icon}</div>
                <h3 className="font-bold mt-2 text-lg">{f.title}</h3>
                <p className="text-sm mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Benefits */}
        {activeTab === "benefits" && (
          <ul className="mb-12 space-y-3 max-w-xl mx-auto text-lg list-disc list-inside">
            {benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        {/* FAQ */}
        {activeTab === "faq" && (
          <div className="space-y-3 max-w-2xl mx-auto">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-4 rounded-xl cursor-pointer hover:bg-white/20 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex justify-between font-medium">
                  <span>{f.q}</span>
                  <span>{openFaq === i ? "-" : "+"}</span>
                </div>
                {openFaq === i && <p className="mt-2 text-sm">{f.a}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnMore;
