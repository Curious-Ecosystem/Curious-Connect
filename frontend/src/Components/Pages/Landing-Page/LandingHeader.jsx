import React from "react"; 
import {RiRestartFill} from '@remixicon/react';

import {RiPhoneFill } from "@remixicon/react";
import { RiMic2Fill } from "@remixicon/react";
import { RiVideoAddFill } from "@remixicon/react"; 
 
const Header = () => {
  return (
    <div className="w-full bg-[#1e228] h-screen text-cyan-50 text-2xl text-center">
        <div className="top flex w-full h-[90vh] pl">
          <div className="left  h-full flex flex-col  justify-center w-[48%] leading-[4.2vw] text-left pl-8">
            <h2 className="text-[4vw] font-semibold tracking-tight leading-[3vw]">CONNECT</h2>
            <h2 className="text-[4vw] font-semibold ">COLLABORATE</h2>
            <h2 className="text-[4vw] font-semibold  ">START <span className="border border-sky-500 rounded-2xl px-2  bg-[#144c61] ">CONFERENCE</span></h2>
            <p className="text-[1.2vw] font-semibold tracking-tight  pt-[1vw]  text-[#5b5b5d] leading-5 ">START YOUR NEXT VEDIO CALL WITH A SINGLE CLICK. <br /> NO DOWNLOAD, PLUG-IN, OR LOGIN IS REQUIRED. <br /> JUST GET STRAIGHT TO TALKING, MESSAGING, <br /> AND SHARING YOUR SCREEN</p>
          </div>
          <div className="right relative  w-[52%] h-screen  ">
            <div className="cir absolute h-96 w-96  border-l-4 border-l-[#6fa3d3] rounded-full   top-[-4vw] left-[-12vw] "></div>
           <div className=" absolute top-12 left-[-8vw] svg h-48 w-80 overflow-hidden">
                <img className="h-[100%] w-[100%] " src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="" /></div>
             <div className="img relative">
             
              <div className="blue absolute right-3 top-4 h-72 rounded-md border border-sky-500 w-72 bg-[#126482fe] "></div>
              <div className="blue absolute right-3 top-4 h-72 rounded-md border border-sky-500 w-72 bg-[#126482fe] z-index-[1]"></div>
              <div className="blue absolute right-20 top-20 h-80 rounded-md  w-80 bg-[#1D2026] z-index-[0] ">
                <div className=" absolute right-[-5vw] svg h-48 w-80 overflow-hidden">
                <img className="h-[100%] w-[100%] " src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="" /></div>
                
              </div>
              
              <div className="img-container  absolute top-32 h-[70vh] w-[70%] ">
                  <div className="top h-[70%] w-[100%] flex"> 
                  {/* <img className="h-16 w-32 bg-transparent" src="https://static.videezy.com/system/resources/thumbnails/000/051/374/original/06.jpg" alt="" /> */}
                  <RiVideoAddFill size={46} color="white" className="bg-gray-600 rounded-full p-3 absolute -top-16 z-20 left-36 "/>
                  <RiVideoAddFill size={46} color="white" className="bg-gray-600 rounded-full p-3 absolute top-72 z-20 left-64 "/>
                  <RiPhoneFill size={46} color="white" className="bg-red-600 rounded-full p-3 absolute top-72 z-20 left-80 "/>
                  <RiMic2Fill size={46} color="white" className="bg-gray-600 rounded-full p-3 absolute top-72 z-20 left-96 "/>
                    <img className="h-36 w-48 object-cover border-4 border-[#1d2026] rounded-sm absolute left-0 top-48 z-10" src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    <img className="h-80 w-96 object-cover rounded-sm absolute right-0 z-0"  src="https://images.pexels.com/photos/8374304/pexels-photo-8374304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                  <div className="bottom flex gap-5 h-[30%] w-[100%]  ">
                  <img className="h-[80%] w-[30%] object-cover rounded-md" src="https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <img className="h-[80%] w-[30%] object-cover rounded-md" src="https://images.pexels.com/photos/5668790/pexels-photo-5668790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className="h-[80%] w-[30%] object-cover rounded-md" src="https://images.pexels.com/photos/5325071/pexels-photo-5325071.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                  </div>
                </div>
              
             </div>
          </div>
        </div>
        <div className="bottom mt-[-2vw] h-[10vh] w-full px-32 ">
          <div className="paste h-full w-full flex justify-between py-5 bg-[#15181d] rounded-md">
            <h1 className="font-semibold text-[1.6vw] tracking-tighter pl-5">PASTE THE MEETING CODE</h1>
            <h2 className="font-[400] text-[1.6vw] tracking-tighter px-2 pt-1 pb-9  rounded-lg bg-[#242830] ">11111CURIOUSCONNECT</h2>
            <button className="font-[400] text-[1.6vw] tracking-tighter px-4 pt-1 pb-9  rounded-lg bg-sky-500 ">JOIN ROOM</button>
             <RiRestartFill size={36}  className="bg-sky-500 rounded-md  mr-4" /> 
          </div>
        </div>
    </div>
  );
};

export default Header;
