import React, { useEffect } from "react";
import Header from "../components/home/Header";
import Painer from "../components/home/Painer";
import HeaderSection from "../components/home/HeaderSection";
import Testimonial from "../components/home/Testimonial";
import Footer from "../components/home/Footer";

const Home = () => {
  // ✅ Log when Home page loads
  useEffect(() => {
    console.log("🏠 Home Page Loaded Successfully");
    return () => console.log("🛑 Home Page Unmounted");
  }, []);

  return (
    <div>
      {/* Log for each section */}
      {console.log("🚀 Rendering Header Component")}
      <Header />

      {console.log("🚀 Rendering Painer (Services) Component")}
      <Painer />

      {console.log("🚀 Rendering HeaderSection Component")}
      <HeaderSection />

      {console.log("🚀 Rendering Testimonial Component")}
      <Testimonial />

      {console.log("🚀 Rendering Footer Component")}
      <Footer />
    </div>
  );
};

export default Home;
