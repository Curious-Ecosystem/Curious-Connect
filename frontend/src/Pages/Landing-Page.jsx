import React, { useState, useEffect } from 'react';
import MeetingCards from '../Components/Pages/Landing-Page/MeetingCards';
import OurProducts from '../Components/Pages/Landing-Page/OurProducts';
import JoinRoom from './JoinRoom-Page';
import HeroSection from '../Components/Pages/Landing-Page/HeroSection';
import HeroSectionMobileView from '../Components/Pages/Landing-Page/HeroSectionMobileView';
import FeatureCardSection from '../Components/Pages/Landing-Page/FeatureCardSection';
import JoinWithCode from '../Components/Pages/Landing-Page/JoinWithCode';
import Login from './Login';
import Navbar from '../Components/Pages/Landing-Page/Navbar';

export const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <div>
      {isMobile ? <HeroSectionMobileView /> : <HeroSection />}
      <MeetingCards />
      <FeatureCardSection />
      <OurProducts />
      {/* <Login/> -- used when required make button to use that */}    
    </div>
  );
};
