import React from 'react';
import backgroundImage from '../../../assets/Landing-Page-Assets/ErrorImage.png';

const Error = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center text-center text-black"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-5 rounded-lg md:p-20 w-11/12 md:w-auto bg-opacity-75">
        <p className="text-white text-2xl md:text-4xl mb-8">Coming soon ...</p>
        <div className="text-white mt-8 flex justify-center gap-7">
          <a 
            href="/" 
            className="flex justify-center items-center text-lg px-5 py-3 font-semibold tracking-wide leading-5 text-white whitespace-nowrap hover:border hover:bg-transparent cursor-pointer hover:border-[#408ACD] bg-[#408ACD] rounded-[10px]"
          >
            Home Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
