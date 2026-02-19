import React from "react";
import background from "../assets/background.png";
import { FaLaptopCode, FaShoppingCart, FaSearch, FaCode } from "react-icons/fa";

import ServiceCard from "../components/Services/ServiceCard";
import StatsCard from "../components/Services/StatsCard";
import SectionHeader from "../components/Services/SectionHeader";
import { Link } from "react-router-dom";

const Services = () => {
  // Services Data with link support
  const services = [
    {
      title: "Web Design",
      desc: "Modern, Responsive & High-Performance Websites",
      icon: (
        <FaLaptopCode className="text-5xl text-blue-400 mb-4  hover:rotate-12 transition-all duration-300 shadow-lg shadow-blue-500/50" />
      ),
      link: "/web-design",
    },
    {
      title: "E-Commerce",
      desc: "Complete Online Store & Payment Integration",
      icon: (
        <FaShoppingCart className="text-5xl text-purple-400 mb-4 animate-pulse hover:rotate-12 transition-all duration-300 shadow-lg shadow-purple-500/50" />
      ),
      link: "/e-commerce",
    },
    {
      title: "SEO Optimization",
      desc: "Rank Higher & Get More Organic Traffic",
      icon: (
        <FaSearch className="text-5xl text-pink-400 mb-4 hover:rotate-12 transition-transform duration-300 shadow-lg shadow-pink-500/50" />
      ),
      link: "/seo-optimization",
    },
    {
      title: "Custom Development",
      desc: "Tailored Web Apps & Scalable Solutions",
      icon: (
        <FaCode className="text-5xl text-green-400 mb-4 hover:rotate-12 transition-transform duration-300 shadow-lg shadow-green-500/50" />
      ),
      link: "/custom-development",
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
              icon={service.icon}
              link={service.link} // Keep link support
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <p className="mb-8 text-lg text-gray-300">
            Transform your online presence with our expert digital solutions.
          </p>

            <Link
              to="/get-started"
              onClick={() => console.log("Get Started Clicked ✅")}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 text-center"
            >
              Get Started
            </Link>
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
