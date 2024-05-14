import React from 'react';

<<<<<<< HEAD
import MeetingCards from '../Components/Pages/Landing-Page/MeetingCards';
import OurProducts from '../Components/Pages/Landing-Page/OurProducts';
import JoinRoom from './JoinRoom-Page';
import HeroSection from '../Components/Pages/Landing-Page/HeroSection';
import FeatureCardSection from '../Components/Pages/Landing-Page/FeatureCardSection';

export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <MeetingCards />
      <FeatureCardSection />
      <OurProducts />
    </div>
  );
=======
import MeetingCards from "../Components/Pages/Landing-Page/MeetingCards";
import OurProducts from "../Components/Pages/Landing-Page/OurProducts";
import JoinRoom from "./JoinRoom-Page";
import HeroSection from "../Components/Pages/Landing-Page/HeroSection";
import LandingHeader from "../Components/Pages/Landing-Page/LandingHeader";
import FeatureCardSection from "../Components/Pages/Landing-Page/FeatureCardSection";

export const LandingPage = () => {
	return (
		<div>
			<LandingHeader />
			<HeroSection />
			<MeetingCards />
			<FeatureCardSection />
			<OurProducts />
		</div>
	);
>>>>>>> e803f1932d91df438fbc28f6ac6fc6c60e941f73
};
