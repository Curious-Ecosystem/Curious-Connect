import React from "react";
import { RiRestartLine } from '@remixicon/react';


const JoinRoom = () => {
  return (
    <div className="w-full h-[12vh]    text-cyan-50 text-2xl text-center px-28">
      <div className="join-room h-[10vh] w-full ">
        <div className="paste h-full w-full flex justify-between py-5 bg-[#15181d] rounded-md">
          <h1 className="font-semibold text-[1.6vw] tracking-tighter pl-5">PASTE THE MEETING CODE</h1>
          <h2 className="font-[400] text-[1.6vw] tracking-tighter px-2 pt-1 pb-9  rounded-lg bg-[#242830] ">11111CURIOUSCONNECT</h2>
          <button className="font-[400] text-[1.6vw] tracking-tighter px-4 pt-1 pb-9  rounded-lg bg-sky-500 ">JOIN ROOM</button>
          <RiRestartLine size={36} className="bg-sky-500 rounded-md  mr-4 px-1" />
        </div>
      </div>
      
    </div>
  );
};

export default JoinRoom;
