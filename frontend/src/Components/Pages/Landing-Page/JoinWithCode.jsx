import React from "react";
import img2 from "../../../assets/Landing-Page-Assets/refresh.png";
const JoinWithCode = () => {
	return (
		<div className="flex tracking-wide justify-center mt-0 mb-20 items-center px-16 py-6  m-3 font-bold text-white normal rounded-xl bg-transparent bg-[#15181D] max-md:px-5 lg:mx-16 ">
			<div className="flex sm:justify-center sm:items-center gap-5 w-full max-w-screen-lg max-md:flex-wrap max-md:max-w-[500px]">
				<div className="flex-auto my-auto text-xl whitespace-nowrap uppercase sm:mx-auto sm:my-auto">
					Paste the meeting code
				</div>
				<input
					className="justify-center lg:mr-20 md:w-fit lg:w-[300px] h-1 px-8 py-6 text-md whitespace-nowrap rounded-xl bg-zinc-800 max-md:px-5 focus:outline-none focus:ring-0"
					placeholder="abc-def-xyz"></input>
				<div className="justify-center self-center p-3 text-md bg-[#077BE7] rounded-xl cursor-pointer hover:bg-transparent hover:border-[1px] hover:border-[#077BE7]">
					Join Room
				</div>
				<img
					loading="lazy"
					src={img2}
					className="flex justify-center items-center self-center cursor-pointer w-[40px] h-[40px] p-2 bg-[#077BE7] rounded-xl hover:bg-transparent hover:border-[1px] hover:border-[#077BE7]"
				/>
			</div>
		</div>
	);
};

export default JoinWithCode;
