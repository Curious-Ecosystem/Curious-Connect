import React from "react";
import { LandingPage } from "./Pages/Landing-Page";
import AboutPage from "./Components/common/AboutSection/AboutPage";
import Contact from "./Components/common/AboutSection/Contact";
import FAQ from "./Components/common/AboutSection/FAQ";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Components/common/Footer";

const App = () => {
  return (
    <div className="bg-gradient">
      <Router>
        <Routes> 
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
