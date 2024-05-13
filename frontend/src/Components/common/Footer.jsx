import React from "react";
import { RiDiscordFill } from '@remixicon/react';
import { RiFacebookBoxFill } from '@remixicon/react';
import { RiYoutubeFill } from '@remixicon/react';
import { RiGoogleFill } from '@remixicon/react';

const Footer = () => {
  return (
    <div className="w-full h-full text-cyan-50 text-2xl text-center p-12">
      <div className="footer h-full w-full flex gap-3   ">
        <div className="footer-p1  h-full w-[30%]">
          <div className="top flex items-center gap-3">
            <img className="rounded-full   h-12  object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3ttwD7-4rQqFQpHyS3iH5J4LS2-wBVxOX3YVwexnbbJajr1AVmIID1wjsYICNg7hwuo&usqp=CAU" alt="" />
            <h2 className="text-xl font-semibold tracking-tight">Curious Connect</h2>

          </div>
          <h4 className="text-[1.2vw] font-semibold text-left tracking-tight pt-5">Subscribe to our NewsLetter</h4>
          <p className="text-[1.1vw] font-[600] text-gray-400 tracking-tight text-left leading-[1.3vw]">Get the latest news, articles and resources  directly in your inbox weekly.</p>
          <div className="input-field pt-4 flex gap-5">
            <input className="text-gray-400 w-42 border-none bg-white rounded-md text-sm p-2" type="Enter email" placeholder="enter email" />
            <button className="bg-sky-500 text-sm font-medium px-4 rounded-lg">Subscribe</button>

          </div>

        </div>
        <div className="footer-p2  h-full w-[20%] pl-5">
          <h1 className="text-xl font-[500] text-left pb-4">EXPLORE</h1>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">Webinars</h5>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">Events</h5>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">Resources</h5>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">Remote team Interaction</h5>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">One-on-one Live Session</h5>
        </div>
        <div className="footer-p2  h-full w-[20%] pl-5">
          <h1 className="text-xl font-[500] text-left pb-4">ABOUT US</h1>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">About us</h5>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">Contact us</h5>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">FAQ</h5>

        </div>
        <div className="footer-p2  h-full w-[20%] pl-5">
          <h1 className="text-xl font-[500] text-left pb-4">LEGAL</h1>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">Privacy Policy</h5>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">Terms of Service</h5>

        </div>
        <div className="footer-p2  h-full w-[20%] pl-5">
          <h1 className="text-xl font-[500] text-left pb-4">COLLABORATION</h1>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">Virtual Team Interaction</h5>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">Webinar</h5>
          <h5 className="text-[1vw] text-left font-semibold text-gray-400">Virtual Meetings</h5>
          <div className="social flex gap-3">
            <a className="bg-gray-500 p-1 rounded-full" href=""><RiDiscordFill size={20} color="white" /></a>
            <a className="bg-gray-500 p-1 rounded-full" href=""><RiFacebookBoxFill size={20} color="white" /></a>
            <a className="bg-gray-500 p-1 rounded-full" href=""><RiYoutubeFill size={20} color="white" /></a>
            <a className="bg-gray-500 p-1 rounded-full" href=""><RiGoogleFill size={20} color="white" /></a>
          </div>
          <h4 className="text-[0.7vw] font-semibold text-left tracking-tight">© 2024 Curious Connect, All Rights, Reserved.</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
