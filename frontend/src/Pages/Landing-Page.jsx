import React from "react";
import Time from "../Components/Landing-Page/Time-Section";
import MeetingType from "../Components/Landing-Page/Parts";

export const LandingPage = () => {
	return (
		<div>
			{/* time component */}
			<Time />

			{/* meeting type */}
			<MeetingType />
		</div>
	);
};
