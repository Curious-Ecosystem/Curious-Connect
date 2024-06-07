import React from 'react';
import { motion } from 'framer-motion';
import img from '../../../assets/Landing-Page-Assets/home-r.png';
import JoinWithCode from './JoinWithCode';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="justify-center tracking-wide items-center text-cyan-50 font-bold flex flex-col md:flex-row lg:pl-20 lg:pr-20 gap-2">
        <div className="lg:w-[70%] w-full flex flex-col p-5 justify-center ">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold leading-none p-2"
          >
            CONNECT
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-bold leading-none p-2"
          >
            COLLABORATE
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-2xl md:text-3xl font-bold leading-tight p-2 mb-2 flex gap-2 flex-nowrap text-start"
          >
            START{" "}
            <span className="bg-gradient2 border-[1px] border-[#0D7A9F] rounded-lg pt-0.5 pb-0.5 pr-1 pl-1 mb-">
              CONFERENCE
            </span>
          </motion.h1>

          <div>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-16 text-slate-100 md:text-md text-start Normal leading-5 px-3 font-poppins"
            >
              Start your next video call with a single click. No download,
              plug-in, or login is required. Just get straight to talking,
              messaging, and sharing your screen.
            </motion.p>
          </div>

          <div className="flex gap-4 mt-5 m-2 md:gap-4 md:m-2 md:mt-5 justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-md md:text-md p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-md md:text-md p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white"
            >
              Sign Up
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center p-5 object-contain "
        >
          <svg
            width="229"
            height="249"
            viewBox="0 0 229 249"
            className="lg:top-0 absolute lg:block hidden z-0 mr-[41vw]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 1C62.0625 174.11 177.609 236.462 228 246"
              stroke="#408ACD"
              strokeOpacity="0.65"
              strokeWidth="5"
            />
          </svg>
          <img
            src={img}
            alt="home"
            className="w-[520px] mt-5 z-10"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:w-[20vw] shadow-md shadow-black lg:top-1 w-[20vw] lg:h-[15vw] z-0 h-[100px] absolute shadow-[rgba(0, 0, 0, 0.25)] shadow-[0px 4px 4px] rounded-[10px] border-[1px] lg:block hidden border-[#0D7A9F] border-[solid] ml-[25vw] opacity-50"
            style={{
              background:
                "linear-gradient(216deg, rgba(7,153,200,1) 0%, rgba(17,63,81,0.3086484593837535) 91%)",
            }}
          ></motion.div>
        </motion.div>
      </div>
      <div>
        <JoinWithCode />
      </div>
    </div>
  );
};

export default HeroSection;
