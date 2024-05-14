import React from "react";
import img from "../../../assets/Header/home-r.png";
import img2 from "../../../assets/Header/refresh.png";

const Header = () => {
  return (
    <div className="w-sccreen h-screen text-cyan-50 text-4xl text-center flex flex-col font-bold  ">
      <div className="flex ">
        <div className=" pl-4 mt-20 sm:pl-6 sm:mt-30 md:pl-12 md:mt-10 sm:w-8/12 w-13/12 h-screen xl:pl-10 xl:pb-10">
          <div className="lg:pl-16 lg:mt-14 xl:px-16 xl:mt-20 z-1000">
            <div className="flex flex-col items-start">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-none p-2 z-*">CONNECT</h1>
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-none p-2 ">COLLABORATE</h1>
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-tight p-2 mb-2 flex gap-2 flex-nowrap text-start">START <span className="bg-gradient2 rounded-lg p-1">CONFERENCE</span></h1>
            </div>
            <div>
              <p className="text-sm sm:text-lg text-start leading-5 px-3">Start your next video call with a single click. No download, plug-in, or login is required. Just get straight to talking, messaging, and sharing your screen.</p>
            </div>
            <div className="flex gap-4 m-2 sm:gap-8 sm:m-5 justify-start">
              <button className="text-lg sm:text-xl py-1.5 px-2 sm:py-3 sm:px-4 rounded-lg" style={{ backgroundColor: "#1489F6" }}>SIGN IN</button>
              <button className="text-lg sm:text-xl py-1.5 px-2 sm:py-3 sm:px-4 rounded-lg" style={{ backgroundColor: "#1489F6" }}>SIGN UP</button>
            </div>
          </div>
        </div>
        <div className="w-1/5 sm:w-3/5 h-screen ">
          <div className="border-4 rounded-full absolute w-[40%] h-[34%] right-[15%] bottom-[80%] sm:w-[38%] sm:h-[40%] sm:right-[8%] sm:bottom-[80%] md:w-[40%] md:h-[55%] md:right-[12%] md:bottom-[70%] lg:w-[45%] lg:h-[60%] lg:right-[12%] lg:bottom-[70%] rotate-145 border-borderclr"></div>
          <div className="w-28 h-20 sm:w-48 sm:h-36 md:w-72 md:h-56 lg:w-80 lg:h-64 absolute bg-gradient3 right-4 z-1"></div>
          <img src={img} alt="home" className="w-4/12 right-10 mt-6 sm:right-10 sm:mt-5 sm:w-4/12 lg:w-5/12 xl:w-5/12 md:right-20 absolute md:mt-12 z-100 rounded-xl" />
        </div>
     </div>
     <div className="bottom-1  sm:bottom-4 flex-wrap gap-1 mx-5 py-2 px-1 sm:gap-2  sm:mx-10 sm:py-2 sm:px-2  md:gap-10 md:w-5/6 md:mx-16 md:py-4 md:bottom-4 lg:w-11/12 lg:gap-8 lg:px-6 lg:mx-12 xl:w-5/6 min-h-6 absolute lg:bottom-8 xl:bottom-8  xl:mx-28 rounded-lg flex lg:flex-nowrap justify-center items-center xl:gap-20" style={{ backgroundColor: "#15181D" }}>
        <div className="font-semibold text-sm sm:text-xl md:text-2xl md:font-bold "> PASTE THE MEETING CODE </div>
        <div className=" font-semibold py-1.5 px-1 text-sm md:font-bold sm:text-lg sm:py-2 sm:px-5 md:py-3 md:px-5 rounded-lg" style={{ backgroundColor: "#242830" }}> 11111CURIOUSCONNECT </div>
        <div className=" font-semibold py-1 px-1 text-sm sm:font-bold sm:text-xl sm:py-2 sm:px-3 md:py-3 md:px-3 rounded-lg" style={{ backgroundColor: "#1489F6" }}>JOIN ROOM</div> 
        <div className="py-1 px-1 rounded-lg" style={{ backgroundColor: "#1489F6" }}><img src={img2} className="w-7 sm:w-8"/></div>
     </div>
    </div>
  );
};

export default Header;

