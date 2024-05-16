import React from 'react';

import MeetingCards from '../Components/Pages/Landing-Page/MeetingCards';
import OurProducts from '../Components/Pages/Landing-Page/OurProducts';
import JoinRoom from './JoinRoom-Page';
import HeroSection from '../Components/Pages/Landing-Page/HeroSection';
import FeatureCardSection from '../Components/Pages/Landing-Page/FeatureCardSection';
import JoinWithCode from '../Components/Pages/Landing-Page/JoinWithCode';

export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <MeetingCards />
      <FeatureCardSection />
      <OurProducts />
    </div>
  );
};
