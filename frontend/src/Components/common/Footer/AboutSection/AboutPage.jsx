import React, { useState } from 'react';

import encrypt from '../../../../assets/About-Page-Assets/encrypt.svg';
import chatMsg from '../../../../assets/About-Page-Assets/chatMsg.svg';
import videoConf from '../../../../assets/About-Page-Assets/videoConf.png';
import customMeet from '../../../../assets/About-Page-Assets/customMeet.svg';
import screenShare from '../../../../assets/About-Page-Assets/screenShared.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typewriter } from 'react-simple-typewriter';

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true, // Disable pausing on hover
    cssEase: 'linear', // Add linear CSS easing
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const curiousFeatures = [
    {
      name: 'High-quality video conferencing',
      src: videoConf,
    },
    {
      name: 'Screen sharing capabilities',
      src: screenShare,
    },
    {
      name: 'Real-time chat and messaging',
      src: chatMsg,
    },
    {
      name: 'Secure end-to-end encryption',
      src: encrypt,
    },
    {
      name: 'Customizable meeting settings',
      src: customMeet,
    },
  ];

  const centerIndex =
    (currentIndex + Math.floor(settings.slidesToShow / 2)) %
    curiousFeatures.length;

  const sliderStyle = { cursor: 'grab' };

  return (
    <>
      <style>
        {`        
          .aboutHeading {
            font-size: 1.75rem;
            margin-bottom: 1rem;
            letter-spacing: widest;
            color: #f3f4f6;
            font-weight: 300;
            text-align: center;
          }          
          .center-slide {
            transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
            transform: scale(1.1);
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          }
          .slick-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .slick-track {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding-top: 12px;
            padding-bottom: 12px;
          }
        `}
      </style>
      <div className='bg-gradient min-h-screen flex items-center justify-center'>
        <div className='max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 h-full '>
          <div className='mb-10'>
            <h1 className='aboutHeading'>Our Mission</h1>
            <div className='space-y-5 text-center'>
              <p className='tracking-wider text-6xl mb-6 text-blue-400 leading-tight'>
                Empowering teams to{' '}
                <span className='text-gray-100'>
                  <Typewriter
                    words={['Connect', 'Achieve']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    cursorColor='yellow'
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={850}
                  />
                </span>
                <br /> their <span className='text-gray-100'>goals</span>{' '}
                effortlessly.
              </p>
            </div>
            <h1 className='aboutHeading text-gray-800'>Our Identity</h1>
            <div className='bg-white rounded-lg shadow-md p-6 max-h-full'>
              <div className='flex flex-col gap-5 text-lg text-gray-800 text-justify'>
                <p>
                  <span className='font-bold text-[#2563eb]'>
                    Curious Connect{' '}
                  </span>
                  is your go-to platform for revolutionizing virtual
                  collaboration. <br />
                  Designed by{' '}
                  <span className='font-bold text-[#2563eb]'>
                    Curious Ecosystem
                  </span>
                  , it's a microservice-based video conferencing application
                  aimed at enhancing remote team interactions, webinars, and
                  online classes.
                </p>
                <p>
                  With a focus on seamless User Experiences, Secure
                  Authentication, Real-time Communication and Optimized Media
                  processing. Explore Curious Connect to redefine how you{' '}
                  <span className='font-bold text-[#2563eb]'>collaborate</span>{' '}
                  online and unlock new levels of productivity and engagement.
                </p>
              </div>
            </div>
          </div>
          <h2 className='aboutHeading'>Key Features</h2>
          <div className='bg-white rounded-lg shadow-md p-6 max-h-full'>
            <Slider {...settings}>
              {curiousFeatures.map((feature, index) => (
                <div
                  key={index}
                  style={sliderStyle}
                  onMouseDown={(e) =>
                    (e.currentTarget.style.cursor = 'grabbing')
                  }
                  onMouseUp={(e) => (e.currentTarget.style.cursor = 'grab')}
                  onMouseLeave={(e) => (e.currentTarget.style.cursor = 'grab')}
                  className={`flex justify-center items-center flex-col mx-auto bg-white p-4 rounded-lg ${
                    index === centerIndex ? 'centerSlide' : ''
                  }`}>
                  <div className='flex text-center items-center flex-col'>
                    <img
                      className='h-28 mb-2'
                      src={feature.src}
                      alt={feature.name}
                    />
                    <span>{feature.name}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
