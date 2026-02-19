import React from "react";
import AboutFeatures from "../components/About/AboutFeatures";
import AboutHeader from "../components/About/AboutHeader";
import Mission from "../components/About/Mission";

const About = () => {
  console.log("About page rendered");

  return (
    <>
      {console.log("Rendering AboutHeader")}
      <AboutHeader />

      {console.log("Rendering AboutFeatures")}
      <AboutFeatures />

      {console.log("Rendering Mission")}
      <Mission />
    </>
  );
};

export default About;
