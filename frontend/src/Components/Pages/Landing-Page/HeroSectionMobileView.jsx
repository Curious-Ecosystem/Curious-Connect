import React from 'react';
import img from '../../../assets/Landing-Page-Assets/hero-mobile.png';
import JoinWithCode from './JoinWithCode';

// Design Hero section here and call this hero section in "frontend/src/Pages/Landing-Page.jsx"

const HeroSectionMobileView = () => {
  return (
    <div>
      <div className='justify-center tracking-wide items-center text-cyan-50 font-bold flex flex-col md:flex-row lg:pl-20 lg:pr-20 gap-2'>
        <div className='lg:w-[70%] w-full flex flex-col p-5 justify-center text-center'>
          <h1 className='text-lg md:text-3xl font-bold leading-5 p-1 mt-2'>
            CONNECT
          </h1>
          <h1 className='text-lg md:text-3xl font-bold leading-5 p-1'>
            COLLABORATE
          </h1>
          <h1 className='text-lg md:text-3xl font-bold leading-5 p-1 mb-2'>
            CONFERENCE
          </h1>

          {/* paragraph */}
          <div>
            <p className='text-xs text-gray-500 md:text-md text-center leading-4 px-0 font-poppins'>
              Start your next video call with a single click. No download,
              plug-in, or login is required. Just get straight to talking,
              messaging, and sharing your screen.
            </p>
          </div>

          {/* image div */}
          <div className='w-full flex justify-center p-3 object-contain'>
            <svg
              width='101'
              height='85'
              viewBox='0 0 111 95'
              className='top-0 left-0 absolute z-0 mr-[41vw]'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0 92C42.8301 77.457 89.8459 24.6071 108 -6.97969e-06'
                stroke='#408ACD'
                stroke-opacity='0.65'
                stroke-width='5'
              />
            </svg>

            <svg
              width='101'
              height='131'
              viewBox='0 0 111 141'
              className='top-2 left-0 absolute z-0 mr-[41vw]'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0 138C61.4814 109.165 97.4919 34.5593 107.812 0.860839'
                stroke='#408ACD'
                stroke-opacity='0.19'
                stroke-width='5'
              />
            </svg>

            <img src={img} alt='home' className='w-[520px] mt-2 z-10' />
            <div
              className='shadow-md shadow-black right-0 top-0 w-[5.5rem] h-[5.5rem] z-0 absolute shadow-[rgba(0, 0, 0, 0.25)] shadow-[0px 4px 4px] rounded-bl-[10px] border-[1px] border-r-0 border-t-0 border-[#0D7A9F] border-[solid] opacity-60'
              style={{
                background: 'rgb(7,153,200)',
                background:
                  'linear-gradient(216deg, rgba(7,153,200,1) 0%, rgba(17,63,81,0.3086484593837535) 91%)',
              }}></div>
          </div>

          {/* buttons */}
          <div className='flex gap-4 mt-0 m-2 justify-center'>
            <button
              className='text-md p-2 px-3 rounded-lg'
              style={{ backgroundColor: '#1489F6' }}>
              Sign In
            </button>
            <button
              className='text-md p-2 px-3 rounded-lg'
              style={{ backgroundColor: '#1489F6' }}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div>
        <JoinWithCode />
      </div>
    </div>
  );
};

export default HeroSectionMobileView;
