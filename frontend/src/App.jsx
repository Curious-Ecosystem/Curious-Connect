import React from "react";
import { LandingPage } from "./Pages/Landing-Page";
import AboutPage from "./Components/common/Footer/AboutSection/AboutPage";
import Contact from "./Components/common/Footer/AboutSection/Contact";
import FAQ from "./Components/common/Footer/AboutSection/FAQ";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Components/common/Footer/Footer";
import PrivacyPolicyPage from "./Components/common/Footer/LegalSection/PrivacyPolicyPage";
import TermsOfService from "./Components/common/Footer/LegalSection/TermsOfService";

const App = () => {
  return (
    <div className="bg-gradient">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* about section */}
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          {/* legal section  */}
          <Route path="/PrivacyPolicyPage" element={<PrivacyPolicyPage />} />
          <Route path="/termsOfService" element={<TermsOfService />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
