import React from 'react';
import { LandingPage } from './Pages/Landing-Page';
import AboutPage from './Components/common/Footer/AboutSection/AboutPage';
import Contact from './Components/common/Footer/AboutSection/Contact';
import FAQ from './Components/common/Footer/AboutSection/FAQ';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/common/Footer/Footer';
import PrivacyPolicyPage from './Components/common/Footer/LegalSection/PrivacyPolicyPage';
import TermsOfService from './Components/common/Footer/LegalSection/TermsOfService';
import CreateMeeting from './Pages/Create-Meeting-Page';
import MeetingDetails from './Components/Pages/Meeting-Page/Meeting-Details';
import MeetingAvailability from './Components/Pages/Meeting-Page/Meeting-Availability';
import SignInPage from './Pages/SignIn-Page';
import ErrorPage from './Pages/Error-Page';
import Navbar from './Components/Pages/Landing-Page/Navbar';

const App = () => {
  return (
    <div className='bg-gradient'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          {/* about section */}
          <Route path='/aboutUs' element={<AboutPage />} />
          <Route path='/contactUs' element={<Contact />} />
          <Route path='/faq' element={<FAQ />} />

          {/* legal section  */}
          <Route path='/PrivacyPolicyPage' element={<PrivacyPolicyPage />} />
          <Route path='/termsOfService' element={<TermsOfService />} />

          {/* meetings  */}
          <Route path='/createMeeting' element={<CreateMeeting />} />
          <Route
            path='/meetingDetails/meetingSetup'
            element={<MeetingDetails />}
          />
          <Route
            path='/meetingDetails/meetingAvailaibility'
            element={<MeetingAvailability />}
          />              
           {/* Auth Section  */}
          <Route path="/signin" element={<SignInPage />} />
          {/* Error  */}
        <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
