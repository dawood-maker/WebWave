import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import about from "../../assets/about.png";

const AboutFeatures = () => {
  console.log("AboutFeatures component rendered");

  const features = [
    {
      title: "Experienced Team",
      description: "Result-focused and expert professionals.",
    },
    {
      title: "Client-Centric Approach",
      description: "Custom solutions based on your needs.",
    },
    {
      title: "Result-Driven Solutions",
      description: "Delivering measurable results.",
    },
  ];

  console.log("Features array:", features);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 py-24">
      {/* Animated Background Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-indigo-400/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-10">
            {/* Section Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Why Choose Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg max-w-xl">
                We combine expertise, innovation, and strategy to help you grow
                faster and smarter.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                console.log(`Rendering feature ${index}:`, feature);
                return (
                  <div
                    key={index}
                    className="group p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500 transition-all duration-300">
                        <CheckCircle
                          className="text-cyan-500 group-hover:text-white"
                          size={28}
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 mt-2">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <Link
              to="/learn-more"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Learn More →
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-indigo-500/20 blur-2xl rounded-3xl"></div>

            <img
              src={about}
              alt="team"
              className="relative w-full rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
