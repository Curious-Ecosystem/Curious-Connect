import React from "react";
import LandingHeader from "../Components/Pages/Landing-Page/LandingHeader";
import JoinRoom from "../Components/Pages/Landing-Page/JoinRoom";
import Feature from "../Components/Pages/Landing-Page/Feature";
import MeetingCards from "../Components/Pages/Landing-Page/MeetingCards";
import OurTeam from "../Components/Pages/Landing-Page/OurTeam";
import Footer from "../Components/common/Footer";

export const LandingPage = () => {
  return (
    <div>
      <LandingHeader />
      <JoinRoom />
      <MeetingCards />
      <Feature />
      <OurTeam />
      <Footer />
    </div>
  );
};
