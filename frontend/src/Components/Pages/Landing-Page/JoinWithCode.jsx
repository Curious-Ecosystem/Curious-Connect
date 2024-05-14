import React from "react";
import img2 from "../../../assets/Landing-Page-Assets/refresh.png";
const JoinWithCode = () => {
  return (
    <div className="flex tracking-wide justify-center mb-20 items-center px-16 py-6 lg:m-10 m-3 font-bold text-white uppercase rounded-xl bg-zinc-900 max-md:px-5">
      <div className="flex gap-5 w-full max-w-screen-lg max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto text-2xl">paste the meeting code</div>
        <input
          className="justify-center lg:mr-20 md:w-fit lg:w-[300px] px-8 py-6 text-lg whitespace-nowrap rounded-xl bg-zinc-800 max-md:px-5 "
          placeholder="11111curiousconnect"
        ></input>
        <div className="justify-center self-start px-4 py-5 text-xl bg-[#077BE7] rounded-xl cursor-pointer hover:bg-transparent hover:border-[1px] hover:border-[#077BE7]">
          JOIN ROOM
        </div>
		<img
          loading="lazy"
          src={img2}
          className="justify-center self-start cursor-pointer w-[68px] h-[67px] p-2 bg-[#077BE7] rounded-xl hover:bg-transparent hover:border-[1px] hover:border-[#077BE7]"
        />
        
      </div>
    </div>
  );
};

export default JoinWithCode;
