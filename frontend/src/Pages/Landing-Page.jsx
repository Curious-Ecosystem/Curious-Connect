import React from "react";

import MeetingCards from "../Components/Pages/Landing-Page/MeetingCards";
import OurTeam from "../Components/Pages/Landing-Page/OurTeam";
import JoinRoom from "./JoinRoom-Page";
import HeroSection from "../Components/Pages/Landing-Page/HeroSection";
import FeatureCardSection from "../Components/Pages/Landing-Page/FeatureCardSection";

export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureCardSection />
      <MeetingCards />
      <HeroSection />
      <OurTeam />
    </div>
  );
};
