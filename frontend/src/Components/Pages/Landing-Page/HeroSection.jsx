import React from "react";
import img from "../../../assets/Landing-Page-Assets/home-r.png";

import JoinWithCode from "./JoinWithCode";

// Design Hero section here and call this hero section in "frontend/src/Pages/Landing-Page.jsx"

const HeroSection = () => {
	return (
		<div className="justify-center items-center text-cyan-50 font-bold flex flex-col md:flex-row lg:p-20 gap-2">
			<div className="w-full flex flex-col p-5 justify-center ">
				<h1 className="text-2xl md:text-3xl font-bold leading-none p-2">
					CONNECT
				</h1>
				<h1 className="text-2xl md:text-3xl font-bold leading-none p-2">
					COLLABORATE
				</h1>
				<h1 className="text-2xl md:text-3xl font-bold leading-tight p-2 mb-2 flex gap-2 flex-nowrap text-start">
					START <span className="bg-gradient2 rounded-lg p-1">CONFERENCE</span>
				</h1>

				{/* paragraph */}
				<div>
					<p className="text-sm md:text-lg text-start leading-5 px-3">
						Start your next video call with a single click. No download,
						plug-in, or login is required. Just get straight to talking,
						messaging, and sharing your screen.
					</p>
				</div>

				{/* buttons */}
				<div className="flex gap-4 m-2 md:gap-8 md:m-5 justify-start">
					<button
						className="text-lg md:text-xl py-1.5 px-2 md:py-3 md:px-4 rounded-lg"
						style={{ backgroundColor: "#1489F6" }}>
						SIGN IN
					</button>
					<button
						className="text-lg md:text-xl py-1.5 px-2 md:py-3 md:px-4 rounded-lg"
						style={{ backgroundColor: "#1489F6" }}>
						SIGN UP
					</button>
				</div>

				<JoinWithCode />
			</div>

			{/* image div */}
			<div className="w-full flex justify-center  p-5 object-contain">
				<img src={img} alt="home" className="w-[500px] " />
			</div>
		</div>
	);
};

export default HeroSection;
