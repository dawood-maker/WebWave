import { Routes, Route } from "react-router-dom";

import Navber from "./components/Navber";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/home";
import LearnMore from "./pages/LearnMore";
import WabDesign from "./pages/WebDesign";
import ECommerce from "./pages/ECommerce";
import SEO from "./pages/SEO";
import CustomDevelopment from "./pages/CustomDevelopment";

function App() {
  return (
    <div>
      <Navber />

      <Routes>
        {/* Navber Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/learn-more" element={<LearnMore />} />
        {/* Services Routes */}
        <Route path="web-design" element={<WabDesign />} />
        <Route path="e-commerce" element={<ECommerce />} />
        <Route path="seo-optimization" element={<SEO />} />
        <Route path="custom-development" element={<CustomDevelopment />} />
      </Routes>
    </div>
  );
}

export default App;
