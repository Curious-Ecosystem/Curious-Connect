import React from "react";
import img from "../../../assets/Landing-Page-Assets/home-r.png";

import JoinWithCode from "./JoinWithCode";

// Design Hero section here and call this hero section in "frontend/src/Pages/Landing-Page.jsx"

const HeroSection = () => {
  return (
    <div>
      <div className="justify-center tracking-wide items-center text-cyan-50 font-bold flex flex-col md:flex-row lg:pl-20 lg:pr-20 gap-2">
        <div className="lg:w-[70%] w-full flex flex-col p-5 justify-center ">
          <h1 className="text-2xl md:text-5xl font-bold leading-none p-1">
            CONNECT
          </h1>
          <h1 className="text-2xl md:text-5xl font-bold leading-none p-1">
            COLLABORATE
          </h1>
          <h1 className="text-2xl md:text-5xl font-bold leading-tight p-1 mb-2 flex gap-2 flex-nowrap text-start">
            <span className="flex items-center justify-center">START</span>
            <span className="bg-gradient2 border-[1px] border-[#0D7A9F] shadow-md rounded-lg pt-0.5 pb-0.5 pr-1 pl-1 mb-">
              CONFERENCE
            </span>
          </h1>

          {/* paragraph */}
          <div>
            <p className="text-16 text-[#494F5A] md:text-md text-start uppercase Normal leading-5 px-3 font-poppins">
              Start your next video call with a single click. No download,
              plug-in, or login is required. Just get straight to talking,
              messaging, and sharing your screen.
            </p>
          </div>

          {/* buttons */}
          <div className="flex gap-4 mt-5 m-2 md:gap-4 md:m-2 md:mt-5 justify-start">
            <button
              className="button-34 font-jetbrains rounded-md hover:bg-blue-700 hover:text-white transition duration-200">
              SIGN IN
            </button>

            <button
              className="button-34 font-jetbrains rounded-md hover:bg-blue-700 hover:text-white transition duration-200">
              SIGN UP
            </button>
          </div>
        </div>

        {/* image div */}
        <div className="w-full flex justify-center p-5 object-contain ">
          <svg
            width="229"
            height="249"
            viewBox="0 0 229 249"
            className="lg:top-0 absolute lg:block hidden z-0 mr-[41vw]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 1C62.0625 174.11 177.609 236.462 228 246"
              stroke="#408ACD"
              stroke-opacity="0.65"
              stroke-width="5"
            />
          </svg>
          <img src={img} alt="home" className="w-[520px] mt-5 z-10 rounded-3xl" />
          <div
            className="lg:w-[20vw] shadow-md shadow-black lg:top-1 w-[20vw] lg:h-[15vw] z-0 h-[100px] absolute shadow-[rgba(0, 0, 0, 0.25)] shadow-[0px 4px 4px] rounded-2xl border-[1px] lg:block hidden border-[#0D7A9F] border-[solid] ml-[25vw] opacity-50"
            style={{
              background: "rgb(7,153,200)",
              background:
                "linear-gradient(216deg, rgba(7,153,200,1) 0%, rgba(17,63,81,0.3086484593837535) 91%)",
            }}></div>
        </div>
      </div>
      <div>
        <JoinWithCode />
      </div>
    </div>
  );
};

export default HeroSection;
