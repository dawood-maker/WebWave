import React, { useEffect } from "react";
import background from "../../assets/background.png";
import { Link } from "react-router-dom";

function Footer() {
  console.log("Footer component rendered");

  // Optional: log on mount/unmount
  useEffect(() => {
    console.log("Footer component mounted");
    return () => console.log("Footer component unmounted");
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/yourusername",
      color: "blue",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "sky",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/yourusername",
      color: "pink",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yourusername",
      color: "blue",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733561.png",
    },
  ];

  console.log("Social links:", socialLinks);

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  console.log("Quick links:", quickLinks);

  return (
    <footer
      className="relative bg-cover bg-center text-white pt-24 pb-14"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark Glass Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Contact Us
          </h4>

          <p className="hover:text-blue-400 transition duration-300 cursor-pointer">
            info@gmail.com
          </p>

          <p className="hover:text-purple-400 transition duration-300 cursor-pointer">
            +92 03217454974
          </p>
        </div>

        {/* Social Section */}
        <div className="space-y-6">
          <h4 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500">
            Follow Us
          </h4>

          <div className="flex justify-center gap-8">
            {socialLinks.map((s, index) => (
              <a
                key={index}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white/10 backdrop-blur-md transition duration-300 transform hover:scale-125 shadow-lg`}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <img src={s.icon} alt={s.name} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
            Quick Links
          </h4>

          <ul className="space-y-3">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="hover:text-green-400 transition duration-300 hover:tracking-wider"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="relative mt-16 border-t border-white/20 pt-6 text-center text-sm text-gray-400">
        © 2026 WebWave. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
