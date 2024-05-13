import React from "react";
import LandingHeader from "../Components/Pages/Landing-Page/LandingHeader";
import Feature from "../Components/Pages/Landing-Page/Feature";
import MeetingCards from "../Components/Pages/Landing-Page/MeetingCards";
import OurTeam from "../Components/Pages/Landing-Page/OurTeam";
import JoinRoom from "./JoinRoom-Page";

export const LandingPage = () => {
	return (
		<div>
			<LandingHeader />
			<JoinRoom />
			<MeetingCards />
			<Feature />
			<OurTeam />
		</div>
	);
};
