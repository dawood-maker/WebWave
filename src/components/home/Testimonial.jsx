import React, { useEffect } from "react";
import background from "../../assets/background.png";
import male from "../../assets/male.png";
import female from "../../assets/female.png";

function Testimonial() {
  useEffect(() => {
    console.log("Testimonial component loaded!");
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-20 md:py-32"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto px-6 md:px-0 text-center text-white">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          What Our Clients Say
        </h2>

        {/* Testimonial Cards */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 max-w-6xl mx-auto px-4 overflow-hidden">
          {/* Card 1 */}
          <div className="bg-white bg-opacity-95 p-8 rounded-3xl shadow-2xl flex-1 border-t-4 border-blue-400">
            <img
              src={male}
              alt="Ahmed R."
              className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl"
            />
            <p className="text-gray-700 mb-4 text-lg md:text-base leading-relaxed">
              "Amazing experience! My website looks fantastic and works
              perfectly."
            </p>
            <strong className="block text-gray-900 mb-2 text-lg">
              Ahmed R.
            </strong>
            <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
          </div>

          {/* Card 2 */}
          <div className="bg-white bg-opacity-95 p-8 rounded-3xl shadow-2xl flex-1 border-t-4 border-purple-400">
            <img
              src={female}
              alt="Sara K."
              className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-purple-500 shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl"
            />
            <p className="text-gray-700 mb-4 text-lg md:text-base leading-relaxed">
              "Highly professional service and very user-friendly platform."
            </p>
            <strong className="block text-gray-900 mb-2 text-lg">
              Sara K.
            </strong>
            <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
          </div>

          {/* You can add more cards the same way */}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
