import React from "react";
import background from "../assets/background.png";

import ServiceCard from "../components/Services/ServiceCard";
import StatsCard from "../components/Services/StatsCard";
import SectionHeader from "../components/Services/SectionHeader";

const Services = () => {
  // Services Data
  const services = [
    {
      title: "Web Design",
      desc: "Modern, Responsive & High-Performance Websites",
    },
    {
      title: "E-Commerce",
      desc: "Complete Online Store & Payment Integration",
    },
    {
      title: "SEO Optimization",
      desc: "Rank Higher & Get More Organic Traffic",
    },
    {
      title: "Custom Development",
      desc: "Tailored Web Apps & Scalable Solutions",
    },
  ];

  // Stats Data
  const stats = [
    { num: "300+", label: "Happy Clients" },
    { num: "1,500+", label: "Projects Completed" },
    { num: "95%", label: "Client Satisfaction" },
    { num: "5★", label: "Customer Reviews" },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white px-6 py-20"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full text-center">
        {/* Header */}
        <SectionHeader />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <p className="mb-8 text-lg text-gray-300">
            Transform your online presence with our expert digital solutions.
          </p>

          <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:scale-110 transition duration-300 shadow-xl">
            Get Started
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-10 mt-24 text-center">
          {stats.map((stat, index) => (
            <StatsCard key={index} num={stat.num} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
