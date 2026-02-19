import { Routes, Route } from "react-router-dom";

import Navber from "./components/Navber";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/home";
import LearnMore from "./pages/LearnMore";


function App() {
  return (
    <div>
      <Navber />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
      
    </div>
  );
}

export default App;
