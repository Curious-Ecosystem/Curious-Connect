import React from "react";
import { RiRestartLine } from '@remixicon/react';
import { RiAddFill } from "@remixicon/react";
import { RiContactsLine } from "@remixicon/react";
import { RiCalendarLine } from "@remixicon/react";
import { RiVideoAddLine } from "@remixicon/react";


const JoinRoom = () => {
  return (
    <div className="w-full h-[60vh]    text-cyan-50 text-2xl text-center px-28">
      <div className="top h-[10vh] w-full ">
        <div className="paste h-full w-full flex justify-between py-5 bg-[#15181d] rounded-md">
          <h1 className="font-semibold text-[1.6vw] tracking-tighter pl-5">PASTE THE MEETING CODE</h1>
          <h2 className="font-[400] text-[1.6vw] tracking-tighter px-2 pt-1 pb-9  rounded-lg bg-[#242830] ">11111CURIOUSCONNECT</h2>
          <button className="font-[400] text-[1.6vw] tracking-tighter px-4 pt-1 pb-9  rounded-lg bg-sky-500 ">JOIN ROOM</button>
          <RiRestartLine size={36} className="bg-sky-500 rounded-md  mr-4 px-1" />
        </div>
      </div>
      <div className="bottom w-full h-[40vh]  px-28 py-10">
        <div className="schedule-card w-full h-full flex justify-between">
          <div className="orage h-full w-[22%] rounded-2xl bg-[#ff742e]">
            <RiAddFill size={30} color="white" className="m-2" />
            <h4 className="text-[.9vw] font-bold text-left px-4 mt-12">INSTANT MEETING</h4>
            <p className="text-[0.9vw] font-light leading-4 text-left px-4">START AN INSTANT <br /> MEETING</p>
          </div>
          <div className="blue  h-full w-[22%] rounded-2xl bg-[#0e78f9]">
            <RiContactsLine size={30} color="white" className="m-2" />
            <h4 className="text-[.9vw] font-bold text-left px-4 mt-12 ">UPCOMING MEETING</h4>
            <p className="text-[0.9vw] font-light leading-4 text-left px-4">VIA INVITATION LINK</p>
          </div>
          <div className="purple  h-full w-[22%] rounded-2xl bg-[#830ef9]">

            <RiCalendarLine size={30} color="white" className="m-2" />
            <h4 className="text-[.9vw] font-bold text-left px-4 mt-12">SCHEDULE MEETING</h4>
            <p className="text-[0.9vw] font-light leading-4 text-left px-4">PLAN YOUR MEETING</p>
          </div>
          <div className="yellow  h-full w-[22%] rounded-2xl bg-[#f9a90e]">
            <RiVideoAddLine size={30} color="white" className="m-2" />
            <h4 className="text-[.9vw] font-bold text-left px-4 mt-12">VIEW STREAM</h4>
            <p className="text-[0.9vw] font-light leading-4 text-left px-4">VIEW STREAM ON OUR EVENT PAGE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
