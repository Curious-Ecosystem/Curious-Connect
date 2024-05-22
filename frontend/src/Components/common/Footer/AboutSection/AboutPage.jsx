import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import videoConf from '../../../../assets/About-Page-Assets/videoConf.png';
import screenShare from '../../../../assets/About-Page-Assets/screenShared.svg';
import chatMsg from '../../../../assets/About-Page-Assets/chatMsg.svg';
import encrypt from '../../../../assets/About-Page-Assets/encrypt.svg';
import customMeet from '../../../../assets/About-Page-Assets/customMeet.svg';

const curiousFeatures = [
  {
    'name': 'High-quality video conferencing',
    src: videoConf,
  },
  {
    'name': 'Screen sharing capabilities',
    src: screenShare,
  },
  {
    'name': 'Real-time chat and messaging',
    src: chatMsg,
  },
  {
    'name': 'Secure end-to-end encryption',
    src: encrypt,
  },
  {
    'name': 'Customizable meeting settings',
    src: customMeet,
  },
];

const sliderStyle = {
  cursor: 'grab',
};

function AboutPage() {
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


  const getCenterIndex = () => {
    const totalSlides = curiousFeatures.length;
    const slidesToShow = settings.slidesToShow;
    const centerIndex = Math.floor(slidesToShow / 2);
    return (currentIndex + centerIndex) % totalSlides;
  };

  const centerIndex = getCenterIndex();

  return (
    <div>
      <style>
        {`
            .center-slide {
              transition: transform 0.5s ease, box-shadow 0.5s ease;
              box-shadow: 0px 4px 20px rgba(0, 0, 0, .45);
              
              transform : scale(1.1);
            }
            .slick-slide {
              display: flex;              
              justify-content: center;
              align-items: center;
              height: 100%;
            }
            
            .slick-track {              
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              padding-top:3rem;
              padding-bottom:3rem;
            }
          }
  `}
      </style>
      <div className='bg-gradient min-h-screen flex items-center justify-center'>
        <div className='max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-extrabold text-gray-100 mb-4'>
            About Us
          </h1>
          <p className='text-lg text-gray-100 mb-6'>
            Curious Connect is your go-to platform for revolutionizing virtual
            collaboration. Designed by Curious Ecosystem, it's a
            microservice-based video conferencing application aimed at enhancing
            remote team interactions, webinars, and online classes.
          </p>
          <p className='text-lg text-gray-100 mb-6'>
            With a focus on seamless user experiences, secure authentication,
            real-time communication, and optimized media processing, Curious
            Connect empowers teams to connect effortlessly and achieve their
            goals.
          </p>
          <p className='text-lg text-gray-100 mb-6'>
            Explore Curious Connect to redefine how you collaborate online and
            unlock new levels of productivity and engagement.
          </p>
          <div className='bg-white rounded-lg shadow-md p-6 max-h-full'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Key Features
            </h2>
            <Slider {...settings} >
              {curiousFeatures.map((feature, index) => (
                <div
                  key={index}
                  style={sliderStyle}
                  onMouseDown={(e) => (e.currentTarget.style.cursor = 'grabbing')}
                  onMouseUp={(e) => (e.currentTarget.style.cursor = 'grab')}
                  onMouseLeave={(e) => (e.currentTarget.style.cursor = 'grab')}
                  className={`flex justify-center items-center flex-col mx-auto bg-white p-4 rounded-lg ${index === centerIndex ? 'center-slide' : ''
                    }`}
                >
                  <div className="flex text-center items-center flex-col">
                    <img className='h-28 mb-2' src={feature.src} alt={feature.name} />
                    <span>{feature.name}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
