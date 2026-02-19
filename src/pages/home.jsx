import React from "react";
import Header from "../components/home/Header";
import Painer from "../components/home/Painer";
import HeaderSection from "../components/home/HeaderSection";
import Testimonial from "../components/home/Testimonial";
import Footer from "../components/home/Footer";



const Home = () => {
  return (
    <div>
      <Header />
      <Painer />
      <HeaderSection />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
