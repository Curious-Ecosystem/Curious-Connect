import React from "react";
import img2 from "../../../assets/Landing-Page-Assets/refresh.png";
const JoinWithCode = () => {
	return (
		<div>
			<div className="w-full flex flex-row flex-wrap p-2 justify-start items-center gap-2">
				<div className="flex justify-center items-center">
					<p className="text-white">Your Code Here</p>
				</div>
				<div className="flex justify-start items-start place-items-center  gap-2">
					<input
						type="text"
						className="bg-gray-800 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-indigo-500"
						placeholder="Enter Code"
					/>
				</div>

				<div className="p-2 rounded-lg flex bg-[#1489F6] gap-3  justify-center items-center">
					<p className="text-white">Join Now</p>
					<img src={img2} className="w-5 sm:w-5" />
				</div>
			</div>
		</div>
	);
};

export default JoinWithCode;
