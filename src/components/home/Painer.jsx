import React, { useEffect } from "react";
import { motion } from "framer-motion";
import web from "../../assets/web.png";
import ecommerce from "../../assets/ecommerce.png";
import seo from "../../assets/seo.png";

const services = [
  { title: "Web Design", desc: "Modern & Responsive Sites", img: web },
  { title: "E-Commerce", desc: "Online Store Solutions", img: ecommerce },
  { title: "SEO & Marketing", desc: "Boost Your Online Presence", img: seo },
];

const Painer = () => {
  useEffect(() => {
    console.log("🔥 Services Section Loaded");
  }, []);

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-500/20 blur-[150px] rounded-full animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-block px-5 md:px-6 py-2 mb-6 text-sm md:text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg animate-pulse">
          Our Services
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-10 md:mb-12">
          What We <span className="text-cyan-400">Offer</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
              onClick={() => console.log(`🚀 ${service.title} Card Clicked!`)}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-3xl cursor-pointer overflow-hidden shadow-lg hover:shadow-[0_15px_60px_rgba(0,255,255,0.3)] transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-20 md:w-24 h-20 md:h-24 mx-auto mb-4 md:mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-12 md:w-16 h-12 md:h-16 object-contain mix-blend-multiply"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors duration-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base">{service.desc}</p>

              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-500/40 transition-all duration-500 pointer-events-none"></div>

              {/* Floating Gradient Overlay */}
              <div className="absolute -top-10 -left-10 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Painer;
